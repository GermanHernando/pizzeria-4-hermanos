import styles from './Cart.module.css';
import { useCart } from '../../context/CartContext.jsx';

const Cart = () => {
    const { carrito, agregarAlCarrito, descontarDelCarrito, quitarDelCarrito, finalizarPedido,cerrarCarrito } = useCart();
    const total = carrito.reduce((suma,item) => suma +item.precio*item.cantidad,0);

if (carrito.length === 0) {
    return (
      <div className={styles.cart}>
        <h2>El carrito esta vacio</h2>
        <a href="#menu" className={styles.menu} onClick={cerrarCarrito}>Ver el menú</a>
      </div>
    );
}

return (
    <div className={styles.cart}>
      <h2>Tu pedido</h2>

      <div className={styles['cart-lista']}>
        <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.cantidad}x {item.nombre} — ${item.precio * item.cantidad}
            <button onClick={() => agregarAlCarrito(item)}>+</button>
            <button onClick={() => descontarDelCarrito(item.id)}>-</button>
            <button onClick={() => quitarDelCarrito(item.id)}>Quitar</button>
          </li>
        ))}
        </ul>
      </div>

       <div className={styles['cart-footer']}>
      <p><strong>Total: ${total}</strong></p>
      <button onClick={finalizarPedido}>Finalizar pedido por WhatsApp</button>
      </div>
    </div>
  );
}


export default Cart;