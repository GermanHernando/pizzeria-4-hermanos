import historiaStyle from './Historia.module.css'

const Historia = () => {
  return (
    <section id="historia" className={historiaStyle.historia}>
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
    </section>
  );
}

export default Historia;