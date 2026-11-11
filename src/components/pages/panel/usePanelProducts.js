import { useCallback, useEffect, useMemo, useState } from "react";
import {
  actualizarProducto,
  crearProducto,
  eliminarProducto,
  obtenerProductos,
} from "../../products/Productos.jsx";

const FORMULARIO_VACIO = {
  nombre: "",
  categoria: "",
  descripcion: "",
  precio: "",
  imagen: "",
};

const mensajeDeError = (error, accion) => {
  if (error?.code === "permission-denied") {
    return `No tenés permisos para ${accion}. Revisá las reglas de seguridad de Firestore.`;
  }
  if (error?.code === "unavailable") {
    return "No se pudo conectar con Firestore. Revisá tu conexión e intentá nuevamente.";
  }
  return `No se pudo ${accion}. Intentá nuevamente.`;
};

export const usePanelProducts = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [editorAbierto, setEditorAbierto] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);
  const [formulario, setFormulario] = useState(FORMULARIO_VACIO);
  const [guardando, setGuardando] = useState(false);
  const [eliminandoId, setEliminandoId] = useState(null);
  const [error, setError] = useState("");
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    let componenteActivo = true;

    obtenerProductos()
      .then((lista) => {
        if (componenteActivo) {
          setProductos(lista);
        }
      })
      .catch((errorCarga) => {
        console.error("Error al cargar productos para el panel:", errorCarga);
        if (componenteActivo) {
          setError(mensajeDeError(errorCarga, "cargar los productos"));
        }
      })
      .finally(() => {
        if (componenteActivo) {
          setCargando(false);
        }
      });

    return () => {
      componenteActivo = false;
    };
  }, []);

  const categorias = useMemo(
    () =>
      [...new Set(productos.map((producto) => producto.categoria?.trim()).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b, "es")),
    [productos],
  );

  const productosFiltrados = useMemo(() => {
    const consulta = busqueda.trim().toLocaleLowerCase("es");
    return productos
      .filter((producto) => {
        const coincideCategoria =
          categoriaSeleccionada === "Todas" ||
          producto.categoria === categoriaSeleccionada;
        const coincideBusqueda =
          !consulta ||
          [producto.nombre, producto.descripcion, producto.categoria]
            .filter(Boolean)
            .some((valor) => valor.toLocaleLowerCase("es").includes(consulta));
        return coincideCategoria && coincideBusqueda;
      })
      .sort((a, b) => (a.nombre || "").localeCompare(b.nombre || "", "es"));
  }, [busqueda, categoriaSeleccionada, productos]);

  const abrirAlta = () => {
    setProductoEditando(null);
    setFormulario(FORMULARIO_VACIO);
    setError("");
    setAviso("");
    setEditorAbierto(true);
  };

  const abrirEdicion = (producto) => {
    setProductoEditando(producto);
    setFormulario({
      nombre: producto.nombre || "",
      categoria: producto.categoria || "",
      descripcion: producto.descripcion || "",
      precio: producto.precio ?? "",
      imagen: producto.imagen || "",
    });
    setError("");
    setAviso("");
    setEditorAbierto(true);
  };

  const cerrarEditor = useCallback(() => {
    if (!guardando) {
      setEditorAbierto(false);
    }
  }, [guardando]);

  const cambiarCampo = (event) => {
    const { name, value } = event.target;
    setFormulario((actual) => ({ ...actual, [name]: value }));
  };

  const guardarProducto = async (event) => {
    event.preventDefault();
    if (guardando) {
      return;
    }

    const datosProducto = {
      nombre: formulario.nombre.trim(),
      categoria: formulario.categoria.trim(),
      descripcion: formulario.descripcion.trim(),
      precio: Number(formulario.precio),
      imagen: formulario.imagen.trim(),
    };

    setGuardando(true);
    setError("");
    setAviso("");
    try {
      if (productoEditando) {
        const actualizado = await actualizarProducto(productoEditando.id, datosProducto);
        setProductos((actuales) =>
          actuales.map((producto) =>
            producto.id === actualizado.id ? actualizado : producto,
          ),
        );
        setAviso("Producto actualizado correctamente.");
      } else {
        const creado = await crearProducto(datosProducto);
        setProductos((actuales) => [...actuales, creado]);
        setAviso("Producto agregado correctamente.");
      }
      setEditorAbierto(false);
    } catch (errorGuardado) {
      console.error("Error al guardar producto:", errorGuardado);
      setError(
        mensajeDeError(
          errorGuardado,
          productoEditando ? "actualizar el producto" : "agregar el producto",
        ),
      );
    } finally {
      setGuardando(false);
    }
  };

  const darDeBaja = async (producto) => {
    const confirmar = window.confirm(
      `¿Querés dar de baja "${producto.nombre}"? Esta acción no se puede deshacer.`,
    );
    if (!confirmar) {
      return;
    }

    setEliminandoId(producto.id);
    setError("");
    setAviso("");
    try {
      await eliminarProducto(producto.id);
      setProductos((actuales) =>
        actuales.filter((elemento) => elemento.id !== producto.id),
      );
      setAviso("Producto eliminado correctamente.");
    } catch (errorEliminacion) {
      console.error("Error al eliminar producto:", errorEliminacion);
      setError(mensajeDeError(errorEliminacion, "eliminar el producto"));
    } finally {
      setEliminandoId(null);
    }
  };

  return {
    productos,
    productosFiltrados,
    categorias,
    cargando,
    busqueda,
    setBusqueda,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    editorAbierto,
    productoEditando,
    formulario,
    guardando,
    eliminandoId,
    error,
    aviso,
    abrirAlta,
    abrirEdicion,
    cerrarEditor,
    cambiarCampo,
    guardarProducto,
    darDeBaja,
  };
};
