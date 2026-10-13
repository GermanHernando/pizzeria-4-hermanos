import style from './Historia.module.css'
// Cuando tengas la foto real, descomentá esta línea:
// import fotoHistoria from '../../assets/historia.jpg';

const Historia = () => {
  const fotoHistoria = null; // reemplazar por el import de arriba cuando tengas la imagen

  return (
    <section id="historia" className={style.historia}>
      <div className={style.historiaLayout}>
        <div className={style.historiaTexto}data-reveal="izquierda">
          <h2>Nuestra historia</h2>
          <p>
            Todo empezó en 2006, cuando los cuatro hermanos Gaspón decidieron abrir 
            una pizzería en el barrio con una sola idea clara: hacer la pizza como la 
            hacía su abuela, sin vueltas. Casi 20 años después, seguimos amasando todos 
            los días a mano y horneando en el mismo horno de barro con el que arrancamos.
          </p>
          <p>
            Hoy la pizzería la manejan los hijos de los fundadores, pero la receta de la 
            masa sigue siendo un secreto de familia.
          </p>
        </div>

        <div className={style.historiaImagen} data-reveal="girar" style={{ '--delay': '0.2s' }}>
          {fotoHistoria ? (
            <img src={fotoHistoria} alt="El horno de Pizzería 4 Hermanos" />
          ) : (
            <div className={style.historiaPlaceholder}>
              <span>🍕</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Historia;