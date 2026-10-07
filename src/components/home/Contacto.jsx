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
        <p>📍 <a href={mapsUrl} target="_blank" rel="noreferrer">{direccion}</a></p>
        <p>🕒 Mar a Dom, 20:00 a 23:15 hs</p>
        <p>📞 Llamanos al <a href="tel:46616503">4661-6503</a></p>
        <p>📱 <a href="https://wa.me/5491124738876" target="_blank" rel="noreferrer">Escribinos por WhatsApp</a></p>
      </div>

     <div className={contactoStyle.mapaWrapper}>
        <iframe
          src={mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
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