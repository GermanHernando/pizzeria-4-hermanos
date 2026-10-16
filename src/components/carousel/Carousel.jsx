import { useState, useEffect, useRef } from 'react';
import ItemList from '../products/ItemList.jsx';
import './Carousel.css'

const DURACION = 600; // ms. Tiene que coincidir con la transición del CSS

const useColumnasResponsive = (columnasDeseadas) => {
  const [columnas, setColumnas] = useState(columnasDeseadas);

  useEffect(() => {
    const calcular = () => {
      const ancho = window.innerWidth;
      if (ancho < 480) return 1;
      if (ancho < 768) return 2;
      if (ancho < 1024) return Math.min(3, columnasDeseadas);
      return columnasDeseadas;
    };

    const actualizar = () => setColumnas(calcular());
    actualizar();

    window.addEventListener('resize', actualizar);
    return () => window.removeEventListener('resize', actualizar);
  }, [columnasDeseadas]);

  return columnas;
};

const Carousel = ({ productos, columnas: columnasDeseadas = 3, filas = 1 }) => {
  const columnas = useColumnasResponsive(columnasDeseadas);
  const filasEfectivas = columnas === 1 ? 4 : columnas === 2 ? 2 : filas;
  const itemsPorSlide = columnas * filasEfectivas;
  const cantidad = productos.length;

  // Si todos entran en un slide, no hay carrusel
  const totalSlides = cantidad <= itemsPorSlide ? 1 : Math.ceil(cantidad / itemsPorSlide);
  const hayVarios = totalSlides > 1;

  // Cada slide siempre se completa: al llegar al final, vuelve a tomar los primeros productos
  const slides = Array.from({ length: totalSlides }, (_, s) =>
    hayVarios
      ? Array.from({ length: itemsPorSlide }, (_, k) => productos[(s * itemsPorSlide + k) % cantidad])
      : productos
  );

  // Pista: [copia del último, ...slides, copia del primero]
  const pista = hayVarios ? [slides[totalSlides - 1], ...slides, slides[0]] : slides;

  const [pos, setPos] = useState(1); // posición dentro de la pista
  const [animar, setAnimar] = useState(true);
  const bloqueado = useRef(false);

  const activo = hayVarios ? (pos - 1 + totalSlides) % totalSlides : 0;

  // Si cambia el tamaño de pantalla o los productos, volvemos al inicio sin animar
  useEffect(() => {
    bloqueado.current = false;
    setAnimar(false);
    setPos(1);
  }, [columnas, cantidad]);

  // Al terminar la animación: desbloquea y, si estamos en una copia, salta al slide real
  useEffect(() => {
    if (!hayVarios) return;
    const t = setTimeout(() => {
      bloqueado.current = false;
      if (pos === 0) {
        setAnimar(false);
        setPos(totalSlides);
      } else if (pos === totalSlides + 1) {
        setAnimar(false);
        setPos(1);
      }
    }, DURACION);
    return () => clearTimeout(t);
  }, [pos, hayVarios, totalSlides]);

  const mover = (delta) => {
    if (bloqueado.current) return; // ignora clics mientras se está animando
    bloqueado.current = true;
    setAnimar(true);
    setPos((p) => p + delta);
  };

  const irA = (indice) => {
    if (bloqueado.current || indice === activo) return;
    bloqueado.current = true;
    setAnimar(true);
    setPos(indice + 1);
  };

  const estiloGrilla = hayVarios
    ? {
        gridTemplateColumns: `repeat(${columnas}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${filasEfectivas}, 1fr)`,
      }
    : {
        // Pocos productos: mantienen el ancho de una tarjeta normal y quedan centrados
        gridTemplateColumns: `repeat(${Math.min(cantidad, columnas)}, calc((100% - ${columnas - 1} * var(--carousel-gap)) / ${columnas}))`,
        justifyContent: 'center',
      };

  return (
    <div className="carousel">
      <button
        className="carousel-flecha izq"
        onClick={() => mover(-1)}
        aria-label="Anterior"
        style={{ visibility: hayVarios ? 'visible' : 'hidden' }}
      >
        ‹
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={
            hayVarios
              ? {
                  transform: `translateX(calc(${-pos} * (100% + var(--slide-gap))))`,
                  transition: animar ? undefined : 'none',
                }
              : undefined
          }
        >
          {pista.map((slide, i) => (
            <div className="carousel-slide" key={i}>
              <div className="carousel-grid" style={estiloGrilla}>
                <ItemList productos={slide} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-flecha der"
        onClick={() => mover(1)}
        aria-label="Siguiente"
        style={{ visibility: hayVarios ? 'visible' : 'hidden' }}
      >
        ›
      </button>

      {hayVarios && (
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activo ? 'activo' : ''}`}
              onClick={() => irA(i)}
              aria-label={`Ir al slide ${i + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;