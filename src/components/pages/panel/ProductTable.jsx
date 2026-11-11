import { Image, Pencil, Plus, Search, Trash2 } from "lucide-react";
import styles from "../Panel.module.css";

const formatearPrecio = (precio) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2,
  }).format(Number(precio) || 0);

const ProductTable = ({
  productos,
  totalProductos,
  categorias,
  categoriaSeleccionada,
  busqueda,
  cargando,
  eliminandoId,
  onBuscar,
  onCambiarCategoria,
  onAgregar,
  onEditar,
  onEliminar,
}) => (
  <section className={styles.listado} aria-label="Listado de productos">
    <div className={styles.controles}>
      <label className={styles.busqueda}>
        <Search size={18} aria-hidden="true" />
        <span className={styles.soloLectores}>Buscar productos</span>
        <input
          type="search"
          placeholder="Buscar por nombre o descripción"
          value={busqueda}
          onChange={(event) => onBuscar(event.target.value)}
        />
      </label>
      <label className={styles.filtro}>
        <span>Categoría</span>
        <select
          value={categoriaSeleccionada}
          onChange={(event) => onCambiarCategoria(event.target.value)}
        >
          <option value="Todas">Todas</option>
          {categorias.map((categoria) => (
            <option value={categoria} key={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </label>
    </div>

    <div className={styles.resumen}>
      <strong>{productos.length}</strong>{" "}
      {productos.length === 1 ? "producto" : "productos"}
      {categoriaSeleccionada !== "Todas" && ` en ${categoriaSeleccionada}`}
    </div>

    {cargando ? (
      <p className={styles.estado} role="status">
        Cargando productos...
      </p>
    ) : productos.length === 0 ? (
      <div className={styles.vacio}>
        <span className={styles.vacioIcono}>
          <Search size={23} />
        </span>
        <h2>{totalProductos ? "No encontramos productos" : "Todavía no hay productos"}</h2>
        <p>
          {totalProductos
            ? "Probá cambiar la búsqueda o la categoría."
            : "Agregá el primero para empezar a armar el menú."}
        </p>
        {!totalProductos && (
          <button className={styles.botonSecundario} onClick={onAgregar}>
            <Plus size={17} />
            Agregar producto
          </button>
        )}
      </div>
    ) : (
      <div className={styles.tablaContenedor}>
        <table className={styles.tabla}>
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Categoría</th>
              <th scope="col">Precio</th>
              <th scope="col">
                <span className={styles.soloLectores}>Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>
                  <div className={styles.producto}>
                    <div className={styles.miniatura}>
                      {producto.imagen ? (
                        <img src={producto.imagen} alt="" />
                      ) : (
                        <Image size={20} aria-hidden="true" />
                      )}
                    </div>
                    <div className={styles.nombreProducto}>
                      <strong>{producto.nombre}</strong>
                      {producto.descripcion && <span>{producto.descripcion}</span>}
                    </div>
                  </div>
                </td>
                <td>
                  <span className={styles.etiquetaCategoria}>
                    {producto.categoria || "Sin categoría"}
                  </span>
                </td>
                <td className={styles.precio}>{formatearPrecio(producto.precio)}</td>
                <td>
                  <div className={styles.acciones}>
                    <button
                      className={styles.botonAccion}
                      onClick={() => onEditar(producto)}
                      aria-label={`Editar ${producto.nombre}`}
                      title="Editar"
                    >
                      <Pencil size={17} />
                    </button>
                    <button
                      className={`${styles.botonAccion} ${styles.botonEliminar}`}
                      onClick={() => onEliminar(producto)}
                      disabled={eliminandoId === producto.id}
                      aria-label={`Eliminar ${producto.nombre}`}
                      title="Eliminar"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

export default ProductTable;
