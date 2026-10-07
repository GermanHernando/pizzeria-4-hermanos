import { useState } from 'react';
import style from './Navbar.module.css';
import { useCart } from '../../context/CartContext.jsx';

const CATEGORIAS_MENU = [
  { nombre: "Promociones", id: "promociones" },
  { nombre: "Pizzas", id: "pizzas" },
  { nombre: "Sandwiches", id: "sandwiches" },
  { nombre: "Empanadas", id: "empanadas" },
  { nombre: "Calzones", id: "calzones" },
  { nombre: "Pizzas Rellenas", id: "pizzas-rellenas" },
  { nombre: "Adicionales", id: "adicionales" }
];


const Navbar = () => {
const {carrito, abrirCarrito} = useCart();
const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
const [menuAbierto, setMenuAbierto] = useState(false);
    const abrirMenu = () => setMenuAbierto((prev) => !prev);
    const cerrarMenu = () => setMenuAbierto(false);

return (
    <nav className={style.navbar}>  
    <span className={style.marca}>Pizzería 4 Hermanos</span>
    <ul className={style.navbarLinks}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#historia">Nosotros</a></li>
       
       <li className={style.menuDropdownWrapper}>
          <button className={style.menuDropdownBoton} onClick={abrirMenu}>
            Menú {menuAbierto ? '▲' : '▼'}
          </button>

          {menuAbierto && (
            <ul className={style.menuDropdown}>
              {CATEGORIAS_MENU.map((cat) => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`} onClick={cerrarMenu}>{cat.nombre}</a>
                </li>
              ))}
            </ul>
          )}
        </li>




        <li><a href="#contacto">Contacto</a></li>
    </ul>
        <a href="#carrito" className={style.navbarCart} onClick={abrirCarrito}>🛒 {cantidadTotal}</a>
    </nav>
    );
}

export default Navbar;