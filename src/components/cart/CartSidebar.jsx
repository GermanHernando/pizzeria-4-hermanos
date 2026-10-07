import style from './CartSidebar.module.css';
import { useCart } from '../../context/CartContext.jsx';
import Cart from './Cart';

const CartSidebar = () => {
  const { carritoAbierto, cerrarCarrito } = useCart();

  return (
    <>
      <div
        className={`${style['cart-overlay']} ${carritoAbierto ? style.visible : ''}`}
        onClick={cerrarCarrito}
      ></div>

      <aside className={`${style['cart-sidebar']} ${carritoAbierto ? style.abierto : ''}`}>
        <button className={style['cart-cerrar']} onClick={cerrarCarrito}>✕</button>
        <Cart />
      </aside>
    </>
  );
};

export default CartSidebar;