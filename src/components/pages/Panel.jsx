import { ArrowLeft, Plus } from "lucide-react";
import ProductFormModal from "./panel/ProductForm.jsx";
import ProductTable from "./panel/ProductTable.jsx";
import { usePanelProducts } from "./panel/usePanelProducts.js";
import styles from "./Panel.module.css";

const Panel = () => {
  const panel = usePanelProducts();

  return (
    <main className={styles.panel}>
      <header className={styles.encabezado}>
        <a className={styles.volver} href="/" aria-label="Volver al menú">
          <ArrowLeft size={18} />
          <span>Volver al sitio</span>
        </a>
        <div className={styles.marca}>Pizzería 4 Hermanos</div>
      </header>

      <section className={styles.contenido}>
        <div className={styles.tituloFila}>
          <div>
            <p className={styles.kicker}>Administración</p>
            <h1>Productos</h1>
            <p className={styles.subtitulo}>
              Agregá, editá o quitá productos del menú.
            </p>
          </div>
          <button className={styles.botonPrincipal} onClick={panel.abrirAlta}>
            <Plus size={19} />
            <span>Nuevo producto</span>
          </button>
        </div>

        {panel.error && (
          <p className={styles.error} role="alert">
            {panel.error}
          </p>
        )}
        {panel.aviso && (
          <p className={styles.aviso} role="status">
            {panel.aviso}
          </p>
        )}

        <ProductTable
          productos={panel.productosFiltrados}
          totalProductos={panel.productos.length}
          categorias={panel.categorias}
          categoriaSeleccionada={panel.categoriaSeleccionada}
          busqueda={panel.busqueda}
          cargando={panel.cargando}
          eliminandoId={panel.eliminandoId}
          onBuscar={panel.setBusqueda}
          onCambiarCategoria={panel.setCategoriaSeleccionada}
          onAgregar={panel.abrirAlta}
          onEditar={panel.abrirEdicion}
          onEliminar={panel.darDeBaja}
        />
      </section>

      {panel.editorAbierto && (
        <ProductFormModal
          categorias={panel.categorias}
          formulario={panel.formulario}
          productoEditando={panel.productoEditando}
          guardando={panel.guardando}
          error={panel.error}
          onCambiarCampo={panel.cambiarCampo}
          onCerrar={panel.cerrarEditor}
          onGuardar={panel.guardarProducto}
        />
      )}
    </main>
  );
};

export default Panel;
