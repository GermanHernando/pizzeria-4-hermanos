import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll('[data-reveal], [data-reveal-grupo]');

    // Navegadores sin soporte: mostramos todo sin animar
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('revelado'));
      return;
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('revelado');
            observer.unobserve(entrada.target); // se anima una sola vez
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;