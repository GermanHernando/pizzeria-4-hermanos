import './Item.css';
import { useCart } from '../../context/CartContext.jsx';


const Item = ({ id, nombre, descripcion, precio, categoria, imagen }) => {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="menu-item">
      <div className="menu-item-imagen">
          <img src={imagen} alt={nombre} />
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