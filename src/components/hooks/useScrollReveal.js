import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const selector = '[data-reveal], [data-reveal-grupo]';

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entradas) => {
            entradas.forEach((entrada) => {
              if (entrada.isIntersecting) {
                entrada.target.classList.add('revelado');
                observer.unobserve(entrada.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        )
      : null;

    const observarElementos = (raiz) => {
      if (raiz.matches?.(selector)) {
        if (observer) {
          observer.observe(raiz);
        } else {
          raiz.classList.add('revelado');
        }
      }

      raiz.querySelectorAll?.(selector).forEach((elemento) => {
        if (observer) {
          observer.observe(elemento);
        } else {
          elemento.classList.add('revelado');
        }
      });
    };

    document.querySelectorAll(selector).forEach((elemento) => {
      if (observer) {
        observer.observe(elemento);
      } else {
        elemento.classList.add('revelado');
      }
    });

    const menu = document.getElementById('menu');
    const mutaciones = menu && new MutationObserver((entradas) => {
      entradas.forEach((entrada) => {
        entrada.addedNodes.forEach((nodo) => {
          if (nodo.nodeType === Node.ELEMENT_NODE) {
            observarElementos(nodo);
          }
        });
      });
    });
    mutaciones?.observe(menu, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutaciones?.disconnect();
    };
  }, []);
};

export default useScrollReveal;