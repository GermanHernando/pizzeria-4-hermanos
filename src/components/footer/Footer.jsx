import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>&copy; 2026 Pizzeria 4 Hermanos. All rights reserved.</p>
      <p>Developed by <a href="https://wa.me/5491123456789">Germán Hernando</a></p>
    </footer>
  );
};

export default Footer;   
