import { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import { obtenerProductos } from "./Productos.jsx";

const CATEGORIAS_GRANDES = ["Pizzas", "Empanadas"];
const ORDEN_CATEGORIAS = [
  "Promociones",
  "Pizzas",
  "Pizzas Rellenas",
  "Empanadas",
  "Calzones",
  "Adicionales",
];

const slugify = (texto) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let componenteActivo = true;

    const cargarProductos = async () => {
      try {
        const listaProductos = await obtenerProductos();
        if (componenteActivo) {
          setProductos(listaProductos);
        }
      } catch (errorCarga) {
        console.error("Error al obtener los productos de Firestore:", errorCarga);
        if (componenteActivo) {
          setError("No se pudieron cargar los productos. Intentá nuevamente más tarde.");
        }
      } finally {
        if (componenteActivo) {
          setCargando(false);
        }
      }
    };

    cargarProductos();
    return () => {
      componenteActivo = false;
    };
  }, []);

  const categorias = productos.reduce((grupos, producto) => {
    const categoria = producto.categoria?.trim();
    if (!categoria) {
      return grupos;
    }

    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }
    grupos[categoria].push(producto);
    return grupos;
  }, {});
  const categoriasOrdenadas = [
    ...ORDEN_CATEGORIAS
      .filter((categoria) => categorias[categoria])
      .map((categoria) => [categoria, categorias[categoria]]),
    ...Object.entries(categorias).filter(
      ([categoria]) => !ORDEN_CATEGORIAS.includes(categoria),
    ),
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="menu-header">
        <p className="menu-kicker">Nuestro menú</p>
        <h2>Pizzas de barrio</h2>
      </div>

      {cargando && <p role="status">Cargando productos...</p>}
      {!cargando && error && <p role="alert">{error}</p>}
      {!cargando && !error && productos.length === 0 && (
        <p role="status">Todavía no hay productos disponibles.</p>
      )}

      {!cargando &&
        !error &&
        categoriasOrdenadas.map(([nombreCategoria, items]) => {
          const esGrande = CATEGORIAS_GRANDES.includes(nombreCategoria);

          return (
            <div
              key={nombreCategoria}
              id={slugify(nombreCategoria)}
              className="categoria-bloque"
            >
              <div className="categoria-encabezado" data-reveal="izquierda">
                <span className="categoria-monograma">
                  {nombreCategoria.charAt(0)}
                </span>
                <div>
                  <h3 className="categoria-titulo">{nombreCategoria}</h3>
                  <span className="categoria-cantidad">
                    {items.length} opciones
                  </span>
                </div>
              </div>
              <Carousel productos={items} columnas={4} filas={esGrande ? 1 : 1} />
            </div>
          );
        })}
    </section>
  );
};

export default ItemListContainer;
