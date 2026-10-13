import contactoStyle from './Contacto.module.css'
import { MapPin, Phone, Clock } from 'lucide-react'
import fotoContacto from '../../assets/pizza-contacto.jpg'

const Contacto = () => {
  const direccion = "Alvear 1393, Ituzaingó, Buenos Aires";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;
  const whatsappUrl = "https://wa.me/5491124738876";

  return (
    <section id="contacto" className={contactoStyle.contacto}>
      <div className={contactoStyle.card} data-reveal="zoom">
        <div className={contactoStyle.contenido}>
          <p className={contactoStyle.kicker}>Visitanos</p>
          <h2 className={contactoStyle.titulo}>
            Te esperamos con la pizza recién salida del horno
          </h2>

          <ul className={contactoStyle.lista}>
            <li>
              <span className={contactoStyle.icono}><MapPin size={18} /></span>
              <div>
                <strong>Dirección</strong>
                <p>{direccion}</p>
              </div>
            </li>
            <li>
              <span className={contactoStyle.icono}><Phone size={18} /></span>
              <div>
                <strong>Teléfono</strong>
                <p><a href="tel:46616503">4661-6503</a></p>
              </div>
            </li>
            <li>
              <span className={contactoStyle.icono}><Clock size={18} /></span>
              <div>
                <strong>Horarios</strong>
                <p>Martes a Domingos: 20:00 a 23:15 hs</p>
                <p>Lunes: cerrado</p>
              </div>
            </li>
          </ul>

          <div className={contactoStyle.acciones}>
            <a className={contactoStyle.btnPrimario} href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir por WhatsApp
            </a>
            <a className={contactoStyle.btnSecundario} href={mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
        </div>

        <div
          className={contactoStyle.imagen}
          style={{ backgroundImage: `url(${fotoContacto})` }}
          role="img"
          aria-label="Pizza recién salida del horno"
        ></div>
      </div>
    </section>
  );
}

export default Contacto;