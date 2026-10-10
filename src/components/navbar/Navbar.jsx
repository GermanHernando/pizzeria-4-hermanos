import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import style from './Navbar.module.css';
import { useCart } from '../../context/CartContext.jsx';

const CATEGORIAS_MENU = [
  { nombre: "Promociones", id: "promociones" },
  { nombre: "Pizzas", id: "pizzas" },
  { nombre: "Empanadas", id: "empanadas" },
  { nombre: "Calzones", id: "calzones" },
  { nombre: "Pizzas Rellenas", id: "pizzas-rellenas" },
  { nombre: "Adicionales", id: "adicionales" }
];

const Navbar = () => {
  const { carrito, abrirCarrito } = useCart();
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [navAbierto, setNavAbierto] = useState(false);

  const abrirMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarTodo = () => {
    setMenuAbierto(false);
    setNavAbierto(false);
  };

  return (
    <nav className={style.navbar}>
      <span className={style.marca}>Pizzería 4 Hermanos</span>

      <button
        className={style.hamburguesa}
        onClick={() => setNavAbierto((prev) => !prev)}
        aria-label="Abrir menú"
      >
        {navAbierto ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`${style.navbarLinks} ${navAbierto ? style.abierto : ''}`}>
        <li><a href="#inicio" onClick={cerrarTodo}>Inicio</a></li>

        <li className={style.menuDropdownWrapper}>
          <button className={style.menuDropdownBoton} onClick={abrirMenu}>
            Menú {menuAbierto ? '▲' : '▼'}
          </button>

          {menuAbierto && (
            <ul className={style.menuDropdown}>
              {CATEGORIAS_MENU.map((cat) => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`} onClick={cerrarTodo}>{cat.nombre}</a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><a href="#historia" onClick={cerrarTodo}>Nosotros</a></li>
        <li><a href="#contacto" onClick={cerrarTodo}>Contacto</a></li>
      </ul>

      <a
        href="#carrito"
        className={style.navbarCart}
        onClick={abrirCarrito}
        aria-label={`Abrir carrito, ${cantidadTotal} ${cantidadTotal === 1 ? 'producto' : 'productos'}`}
      >
        <svg className={style.navbarCartIcon} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span>{cantidadTotal}</span>
      </a>
    </nav>
  );
}

export default Navbar;