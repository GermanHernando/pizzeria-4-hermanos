import './Item.css';
import { useCart } from '../../context/CartContext.jsx';

//Una vez que tenga las imágenes, sacar junto con su css
const EMOJI_POR_CATEGORIA = {
  "Promociones": "🎉",
  "Pizzas": "🍕",
  "Empanadas": "🥟",
  "Calzone": "🥐",
  "Pizzas Rellenas": "🍕",
  "Bebidas": "🥤",
  "Otros": "🧀",
};

const Item = ({ id, nombre, descripcion, precio, categoria, imagen }) => {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="menu-item">
      <div className="menu-item-imagen">
        {imagen ? (
          <img src={imagen} alt={nombre} />
        ) : (
          <span className="menu-item-placeholder">
            {EMOJI_POR_CATEGORIA[categoria] || "🍽️"}
          </span>
        )}
      </div>

      <div className="menu-item-info">
        <span className="menu-item-nombre">{nombre}</span>
        {descripcion && <p className="menu-item-descripcion">{descripcion}</p>}

        <div className="menu-item-footer">
          <span className="menu-item-precio">${precio}</span>
          <button className="btn-agregar" onClick={() => agregarAlCarrito({ id, nombre, precio })}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;