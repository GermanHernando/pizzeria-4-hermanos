import style from './Hero.module.css'

const Hero = () => {
  return (
    <section id="inicio" className={style.hero}>
      <p className={style.heroKicker} data-reveal="aparecer">Desde 2006 · Ituzaingó</p>
      <h1 data-reveal="zoom" style={{ '--delay': '0.3s' }}>Pizzeria 4 Hermanos</h1>
      <p className={style.heroTexto}data-reveal="subir" style={{ '--delay': '0.45s' }}>
        Pizza recién horneada como en casa.</p>
      <a href="#menu" className={style.heroCta}data-reveal="subir" style={{ '--delay': '0.6s' }}
      >Ver el menú</a>
    </section>
  );
}
export default Hero;