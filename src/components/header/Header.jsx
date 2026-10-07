import style from './Header.module.css';
import Navbar from '../navbar/Navbar.jsx';


const Header = () => {
  return (
    <header className={style.header}>
    <Navbar/>
    </header>
  );
}

export default Header;