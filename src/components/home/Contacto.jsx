import contactoStyle from './Contacto.module.css'

const Contacto = () => {

  const direccion = "Alvear 1393, Ituzaingó, Buenos Aires";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;

  return (
    <section id="contacto" className={contactoStyle.contacto}>
      <h2>Visitanos</h2>
      <div className={contactoStyle.contactoLayout}>
      <div className={contactoStyle.contactoInfo}>
        <p>
          <svg className={contactoStyle.contactoIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <a href={mapsUrl} target="_blank" rel="noreferrer">{direccion}</a>
        </p>
        <p>
          <svg className={contactoStyle.contactoIcon} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          Mar a Dom, 20:00 a 23:15 hs
        </p>
        <p>
          <svg className={contactoStyle.contactoIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          Llamanos al <a href="tel:46616503">4661-6503</a>
        </p>
        <p>
          <svg className={contactoStyle.contactoIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
            <path d="M9 8.5c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.5.2-1.2.3-2.1 0-1-.3-2.2-1-3.4-2.2s-1.9-2.4-2.2-3.4c-.3-.9-.2-1.6 0-2.1Z" />
          </svg>
          <a href="https://wa.me/5491124738876" target="_blank" rel="noreferrer">Escribinos por WhatsApp</a>
        </p>
      </div>

     <div className={contactoStyle.mapaWrapper}>
        <iframe
          src={mapsEmbedUrl}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Pizzería 4 Hermanos en Google Maps"
        ></iframe>
      </div>
  </div>
    
    </section>
  );
}

export default Contacto;