import heroStyle from './Hero.module.css'

const Hero =()=>{
    return(
    <section id="inicio" className={heroStyle.hero}>
      <h1>Pizzeria 4 Hermanos <br /> desde el 2006</h1>
      <p>Masa madre, ingredientes frescos y el horno de siempre. Elegí tus pizzas y te las mandamos armar el pedido por WhatsApp.</p>
    </section>
    );


}
export default Hero;