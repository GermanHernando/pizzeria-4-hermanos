import { useState, useEffect } from 'react';
import ItemList from '../products/ItemList.jsx';
import './Carousel.css'

const useColumnasResponsive = (columnasDeseadas) => {
  const [columnas, setColumnas] = useState(columnasDeseadas);

  useEffect(() => {
    const calcular = () => {
      const ancho = window.innerWidth;
      if (ancho < 480) return 1;            // celular: 1 columna (tarjeta horizontal)
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
  const filasEfectivas = columnas === 1 ? 4 : columnas === 2 ? 2 : filas;  // en celular: 2 columnas x 2 filas = 4 por slide
  const [slideActual, setSlideActual] = useState(0);
  const itemsPorSlide = columnas * filasEfectivas;

  useEffect(() => {
    setSlideActual(0);
  }, [columnas]);

  const slides = [];
  for (let i = 0; i < productos.length; i += itemsPorSlide) {
    slides.push(productos.slice(i, i + itemsPorSlide));
  }

  const totalSlides = slides.length;

  const irAAnterior = () => {
    setSlideActual((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const irASiguiente = () => {
    setSlideActual((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const estiloGrilla = {
    gridTemplateColumns: `repeat(${columnas}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${filasEfectivas}, 1fr)`,
  };

  return (
    <div className="carousel" data-reveal="zoom">
    <button
  className="carousel-flecha izq"
  onClick={irAAnterior}
  aria-label="Anterior"
  style={{ visibility: totalSlides > 1 ? 'visible' : 'hidden' }}
>
  ‹
</button>

<div className="carousel-grid" style={estiloGrilla} >
  <ItemList productos={slides[slideActual]} />
</div>

<button
  className="carousel-flecha der"
  onClick={irASiguiente}
  aria-label="Siguiente"
  style={{ visibility: totalSlides > 1 ? 'visible' : 'hidden' }}
>
  ›
</button>

      {totalSlides > 1 && (
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === slideActual ? 'activo' : ''}`}
              onClick={() => setSlideActual(i)}
              aria-label={`Ir al slide ${i + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;