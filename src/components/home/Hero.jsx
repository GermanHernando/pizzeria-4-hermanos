import style from './Hero.module.css'

const Hero = () => {
  return (
    <section id="inicio" className={style.hero}>
      <p className={style.heroKicker}>Desde 2006 · Ituzaingó</p>
      <h1>Pizzeria 4 Hermanos</h1>
      <p className={style.heroTexto}>Pizza recién horneada como en casa.</p>
      <a href="#menu" className={style.heroCta}>Ver el menú</a>
    </section>
  );
}
export default Hero;