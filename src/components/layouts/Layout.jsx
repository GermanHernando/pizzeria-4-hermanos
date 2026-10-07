import Header from '../header/Header.jsx';
import Hero from '../home/Hero.jsx'
import Historia from '../home/Historia.jsx'
import Contacto from '../home/Contacto.jsx'
import Footer from "../footer/Footer.jsx";

const Layout = ({ children }) => {
 
  return (
    <div className="layout">
      <Header/>
      <Hero/>
      <Historia/>
      <main className="content">
        {children}
      </main>
      <Contacto/>
      <Footer />
    </div>
  );
}

export default Layout;