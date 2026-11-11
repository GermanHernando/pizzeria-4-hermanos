import { useEffect } from "react";
import { X } from "lucide-react";
import styles from "../Panel.module.css";

const ProductFormModal = ({
  categorias,
  formulario,
  productoEditando,
  guardando,
  error,
  onCambiarCampo,
  onCerrar,
  onGuardar,
}) => {
  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        onCerrar();
      }
    };
    document.addEventListener("keydown", cerrarConEscape);
    return () => document.removeEventListener("keydown", cerrarConEscape);
  }, [onCerrar]);

  return (
    <div
      className={styles.fondoModal}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onCerrar();
        }
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-editor"
      >
        <div className={styles.modalEncabezado}>
          <div>
            <p className={styles.kicker}>
              {productoEditando ? "Modificar menú" : "Ampliar menú"}
            </p>
            <h2 id="titulo-editor">
              {productoEditando ? "Editar producto" : "Nuevo producto"}
            </h2>
          </div>
          <button
            className={styles.botonCerrar}
            onClick={onCerrar}
            disabled={guardando}
            aria-label="Cerrar formulario"
          >
            <X size={20} />
          </button>
        </div>

        <form className={styles.formulario} onSubmit={onGuardar}>
          <label>
            Nombre
            <input
              name="nombre"
              value={formulario.nombre}
              onChange={onCambiarCampo}
              placeholder="Ej.: Pizza muzzarella"
              maxLength={100}
              required
              autoFocus
            />
          </label>
          <label>
            Categoría
            <input
              name="categoria"
              value={formulario.categoria}
              onChange={onCambiarCampo}
              placeholder="Ej.: Pizzas"
              list="categorias-productos"
              maxLength={60}
              required
            />
            <datalist id="categorias-productos">
              {categorias.map((categoria) => (
                <option value={categoria} key={categoria} />
              ))}
            </datalist>
          </label>
          <label>
            Precio
            <div className={styles.entradaPrecio}>
              <span>$</span>
              <input
                name="precio"
                type="number"
                value={formulario.precio}
                onChange={onCambiarCampo}
                placeholder="0"
                min="0.01"
                step="0.01"
                required
              />
            </div>
          </label>
          <label>
            Descripción <span className={styles.opcional}>Opcional</span>
            <textarea
              name="descripcion"
              value={formulario.descripcion}
              onChange={onCambiarCampo}
              placeholder="Contá brevemente qué incluye"
              maxLength={240}
              rows={3}
            />
          </label>
          <label>
            URL o ruta de la imagen <span className={styles.opcional}>Opcional</span>
            <input
              name="imagen"
              value={formulario.imagen}
              onChange={onCambiarCampo}
              placeholder="https://... o /src/assets/..."
              maxLength={500}
            />
          </label>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <div className={styles.modalAcciones}>
            <button
              type="button"
              className={styles.botonCancelar}
              onClick={onCerrar}
              disabled={guardando}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.botonPrincipal}
              disabled={guardando}
            >
              {guardando
                ? "Guardando..."
                : productoEditando
                  ? "Guardar cambios"
                  : "Agregar producto"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductFormModal;
