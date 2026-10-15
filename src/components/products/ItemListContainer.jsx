import Carousel from "../carousel/Carousel";
import mozzarella from "../../assets/products/pizzas/muzzarella.jpg";
import anchoas from "../../assets/products/pizzas/anchoas.jpg";
import primavera from "../../assets/products/pizzas/primavera.jpg";
import jamon from "../../assets/products/pizzas/jamon.jpg";
import jamonMorrón from "../../assets/products/pizzas/jamon-morron.jpg";
import fugazza from "../../assets/products/pizzas/fugazza.avif";
import fugazzaConMuzzarella from "../../assets/products/pizzas/fugazza-mozzarella.webp";
import fugazzaConJamon from "../../assets/products/pizzas/fugazza-moza-jamon.jpg";
import napolitana from "../../assets/products/pizzas/napolitana.avif";
import napolitanaConJamon from "../../assets/products/pizzas/napolitana-jamon.jpg";
import calabresaPizza from "../../assets/products/pizzas/calabresa.jpg";
import jamonAnanaPizza from "../../assets/products/pizzas/jamon-anana.jpg";
import palmitosJamon from "../../assets/products/pizzas/palmitos-jamon.jpg";
import especialPalmitos from "../../assets/products/pizzas/especial-palmitos.jpg";
import roquefort from "../../assets/products/pizzas/roquefort.jpg";
import provolone from "../../assets/products/pizzas/provolone.jpg";
import panceta from "../../assets/products/pizzas/panceta.jpg";
import tresQuesos from "../../assets/products/pizzas/tres-quesos.webp";
import anchoasConMozzarella from "../../assets/products/pizzas/anchoas-mozzarella.jpg";
import calabresa from "../../assets/products/empanadas/calabresa.jpg";
import caprese from "../../assets/products/empanadas/caprese.jpg";
import carnePicante from "../../assets/products/empanadas/carne-picante.png";
import carneSuave from "../../assets/products/empanadas/carne-suave.png";
import cebollaQueso from "../../assets/products/empanadas/cebolla-queso.jpg";
import humita from "../../assets/products/empanadas/humita.png";
import jamonAnana from "../../assets/products/empanadas/jamon-anana.jpg";
import jamonQueso from "../../assets/products/empanadas/jamonyqueso.png";
import pancetaCiruela from "../../assets/products/empanadas/panceta-ciruela.jpg";
import pollo from "../../assets/products/empanadas/pollo.png";
import roquefortJamon from "../../assets/products/empanadas/roquefort-jamon.jpg";
import verdura from "../../assets/products/empanadas/verdura.jpg";
import calzoneNapolitano from "../../assets/products/calzones/calzone-napolitano.webp";
import calzonePalmitos from "../../assets/products/calzones/calzone-palmitos.webp";
import calzoneRoquefort from "../../assets/products/calzones/calzone-roquefort.jpg";
import calzone4Hermanos from "../../assets/products/calzones/calzone-4-hermanos.jpg";
import fugazzetta from "../../assets/products/pizzas-rellenas/fugazzetta.avif";
import fugazzettaConJamon from "../../assets/products/pizzas-rellenas/fugazzetta-jamon.jpg";
import fugazzettaNapolitana from "../../assets/products/pizzas-rellenas/fugazzetta-napolitana.jpeg";
import fugazzettaEspecial from "../../assets/products/pizzas-rellenas/fugazzetta-especial.jpg";
import faina from "../../assets/products/adicionales/faina.avif";
import gaseosa from "../../assets/products/adicionales/gaseosas.jpg";
import sandwich1 from "../../assets/products/adicionales/sandwich1.jpg";
import sandwich2 from "../../assets/products/adicionales/sandwich2.jpg";
import sandwichIndividual from "../../assets/products/adicionales/sandwich-individual.webp";


const ItemListContainer = () => {
  const productos = [
    // PROMOCIONES
    { id: 1, nombre: " 2 Pizzas de Muzzarella", categoria: "Promociones", descripcion: "Dos pizzas de muzzarella clásica.", precio: 24000, cantidad: 0 },
    { id: 2, nombre: " Muzzarella + 6 empanadas", categoria: "Promociones", descripcion: "1 pizza muzzarella y 6 empanadas a elección.", precio: 24000, cantidad: 0 },
    { id: 3, nombre: " Muzzarella + Napolitana o Jamón", categoria: "Promociones", descripcion: "1 pizza muzzarella y 1 pizza napolitana o de jamón.", precio: 26000, cantidad: 0 },
    { id: 4, nombre: " Muzzarella + Jamón y Morrón", categoria: "Promociones", descripcion: "1 pizza muzzarella y 1 pizza de jamón y morrón.", precio: 28000, cantidad: 0 },
    { id: 5, nombre: " Muzzarella + Jamón + Fugazza c/muzzarella", categoria: "Promociones", descripcion: "1 pizza muzzarella, 1 pizza jamón y 1 fugazza con muzzarella.", precio: 37000, cantidad: 0 },
    { id: 28, nombre: "Docena de empanadas (+2 de regalo)", categoria: "Promociones", descripcion: "12 empanadas a elección + 2 de regalo.", precio: 25000, cantidad: 0 },

    // PIZZAS
    { id: 6, nombre: "Muzzarella", categoria: "Pizzas", descripcion: "Salsa de tomate y mozzarella.", precio: 13000, cantidad: 0, imagen: mozzarella },
    { id: 7, nombre: "Anchoas (sin muzzarella)", categoria: "Pizzas", descripcion: "Salsa de tomate y anchoas, sin mozzarella.", precio: 13000, cantidad: 0, imagen: anchoas },
    { id: 8, nombre: "Primavera", categoria: "Pizzas", descripcion: "Mozzarella, rodajas de tomate y huevo duro picado.", precio: 16000, cantidad: 0, imagen: primavera },
    { id: 9, nombre: "Jamón", categoria: "Pizzas", descripcion: "Mozzarella y jamón.", precio: 15000, cantidad: 0, imagen: jamon },
    { id: 10, nombre: "Jamón y Morrón", categoria: "Pizzas", descripcion: "Mozzarella, jamón y morrón.", precio: 17000, cantidad: 0, imagen: jamonMorrón },
    { id: 11, nombre: "Fugazza", categoria: "Pizzas", descripcion: "Cebolla y orégano, sin mozzarella.", precio: 11000, cantidad: 0, imagen: fugazza },
    { id: 12, nombre: "Fugazza c/muzzarella", categoria: "Pizzas", descripcion: "Cebolla, mozzarella y orégano.", precio: 13000, cantidad: 0, imagen: fugazzaConMuzzarella },
    { id: 13, nombre: "Fugazza c/muzzarella y Jamón", categoria: "Pizzas", descripcion: "Cebolla, mozzarella, jamón y orégano.", precio: 15000, cantidad: 0, imagen: fugazzaConJamon },
    { id: 14, nombre: "Napolitana", categoria: "Pizzas", descripcion: "Mozzarella, rodajas de tomate y ajo.", precio: 15000, cantidad: 0, imagen: napolitana },
    { id: 15, nombre: "Napolitana c/jamón", categoria: "Pizzas", descripcion: "Mozzarella, rodajas de tomate, jamón y ajo.", precio: 16000, cantidad: 0, imagen: napolitanaConJamon },
    { id: 16, nombre: "Calabresa", categoria: "Pizzas", descripcion: "Mozzarella, longaniza y morrón picado.", precio: 17000, cantidad: 0, imagen: calabresaPizza },
    { id: 17, nombre: "Jamón y Ananá", categoria: "Pizzas", descripcion: "Mozzarella, jamón y ananá.", precio: 20000, cantidad: 0, imagen: jamonAnanaPizza },
    { id: 18, nombre: "Palmitos y Jamón", categoria: "Pizzas", descripcion: "Mozzarella, jamón, palmitos y salsa golf.", precio: 19000, cantidad: 0, imagen: palmitosJamon },
    { id: 19, nombre: "Especial Palmitos", categoria: "Pizzas", descripcion: "Mozzarella, jamón, palmitos, salsa golf, roquefort y aceitunas negras.", precio: 20000, cantidad: 0, imagen: especialPalmitos },
    { id: 20, nombre: "Roquefort", categoria: "Pizzas", descripcion: "Mozzarella, roquefort y aceitunas negras.", precio: 17000, cantidad: 0, imagen: roquefort },
    { id: 21, nombre: "Provolone", categoria: "Pizzas", descripcion: "Mozzarella, provolone y aceitunas negras.", precio: 17000, cantidad: 0, imagen: provolone },
    { id: 23, nombre: "Tres quesos", categoria: "Pizzas", descripcion: "Mozzarella, provolone y roquefort.", precio: 17000, cantidad: 0, imagen: tresQuesos },
    { id: 24, nombre: "Anchoas c/Mozzarella", categoria: "Pizzas", descripcion: "Mozzarella y anchoas.", precio: 17000, cantidad: 0, imagen: anchoasConMozzarella },

    // EMPANADAS
    { id: 29, nombre: "Empanada de carne suave", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0, imagen: carneSuave },
    { id: 30, nombre: "Empanada de carne picante", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 , imagen: carnePicante },
    { id: 31, nombre: "Empanada de pollo", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0, imagen: pollo },
    { id: 32, nombre: "Empanada de jamón y queso", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0, imagen: jamonQueso },
    { id: 33, nombre: "Empanada de humita", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0, imagen: humita },
    { id: 34, nombre: "Empanada de roquefort y jamón", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:roquefortJamon },
    { id: 35, nombre: "Empanada de cebolla y queso", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:cebollaQueso },
    { id: 36, nombre: "Empanada de verdura", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:verdura },
    { id: 37, nombre: "Empanada de panceta y ciruela", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:pancetaCiruela },
    { id: 38, nombre: "Empanada caprese", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:caprese },
    { id: 39, nombre: "Empanada de jamón y ananá", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:jamonAnana },
    { id: 40, nombre: "Empanada calabresa", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0,imagen:calabresa },

    // CALZONES
    { id: 41, nombre: "Calzone Napolitano", categoria: "Calzones", descripcion: "Mozzarella, rodajas de tomate, jamón y ajo.", precio: 18000, cantidad: 0, imagen: calzoneNapolitano },
    { id: 42, nombre: "Calzone Roquefort", categoria: "Calzones", descripcion: "Mozzarella, roquefort, tomate, ajo, jamón y morrones.", precio: 21000, cantidad: 0, imagen: calzoneRoquefort },
    { id: 43, nombre: "Calzone Palmitos", categoria: "Calzones", descripcion: "Mozzarella, palmitos, salsa golf y jamón.", precio: 21000, cantidad: 0, imagen: calzonePalmitos },
    { id: 44, nombre: "Calzone 4 Hermanos", categoria: "Calzones", descripcion: "Mozzarella, rodajas de tomate, jamón, longaniza, morrón y ajo.", precio: 21000, cantidad: 0, imagen: calzone4Hermanos },

    // PIZZAS RELLENAS
    { id: 45, nombre: "Fugazzetta", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, cebolla, pimienta, aceitunas verdes, aceite de oliva y orégano. Aprox. 1 hora de demora.", precio: 19000, cantidad: 0, imagen: fugazzetta },
    { id: 46, nombre: "Fugazzetta c/jamón", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, jamón, cebolla, pimienta, aceitunas verdes, aceite de oliva y orégano. Aprox. 1 hora de demora.", precio: 21000, cantidad: 0, imagen: fugazzettaConJamon },
    { id: 47, nombre: "Fugazzetta Napolitana", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, cebolla, pimienta, rodajas de tomate, provenzal, aceitunas verdes, aceite de oliva y orégano. Aprox. 1 hora de demora.", precio: 21000, cantidad: 0, imagen: fugazzettaNapolitana },
    { id: 48, nombre: "Fugazzetta Especial", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, cebolla, pimienta, jamón, morrones, palmitos, aceitunas verdes y orégano. Aprox. 1 hora de demora.", precio: 24000, cantidad: 0, imagen: fugazzettaEspecial },

    // ADICIONALES
    { id: 49, nombre: "Porción de fainá", categoria: "Adicionales", descripcion: "Porción individual.", precio: 1100, cantidad: 0, imagen: faina },
    { id: 25, nombre: "Sándwich N°1 (para 2 personas)", categoria: "Adicionales", descripcion: "Milanesa de carne, lechuga, tomate, jamón, muzzarella y huevo rallado.", precio: 18000, cantidad: 0, imagen: sandwich1 },
    { id: 26, nombre: "Sándwich N°2 (para 2 personas)", categoria: "Adicionales", descripcion: "Milanesa de carne, lechuga, tomate, jamón, muzzarella, huevo rallado, morrón, palmitos y salsa golf.", precio: 21000, cantidad: 0, imagen: sandwich2 },
    { id: 27, nombre: "Sándwich individual", categoria: "Adicionales", descripcion: "Milanesa de carne, lechuga, tomate, jamón y muzzarella.", precio: 10000, cantidad: 0, imagen: sandwichIndividual },
    { id: 50, nombre: "Gaseosa 2.25 Lts", categoria: "Adicionales", descripcion: "Coca Cola, Coca Cola sin azúcar, Fanta o Sprite.", precio: 5300, cantidad: 0, imagen: gaseosa },
    { id: 51, nombre: "Gaseosa 1.75 Lts", categoria: "Adicionales", descripcion: "Coca Cola, Coca Cola sin azúcar, Fanta o Sprite.", precio: 4500, cantidad: 0, imagen: gaseosa },

    
  ];


  const slugify = (texto) => 
  texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

 
  const categorias = productos.reduce((grupos, producto) => {
    const { categoria } = producto;
    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }
    grupos[categoria].push(producto);
    return grupos;
  }, {});

    const CATEGORIAS_GRANDES = ["Pizzas", "Empanadas"];
 return (
    <section id="menu" className="menu-section">
      <div className="menu-header">
        <p className="menu-kicker">Nuestro menú</p>
        <h2>Pizzas de barrio</h2>
      </div>

        {Object.entries(categorias).map(([nombreCategoria, items]) => {
        const esGrande = CATEGORIAS_GRANDES.includes(nombreCategoria);

        return (
          <div key={nombreCategoria} 
          id={slugify(nombreCategoria)} className="categoria-bloque">
            <div className="categoria-encabezado" data-reveal="izquierda">
              <span className="categoria-monograma">{nombreCategoria.charAt(0)}</span>
              <div>
                <h3 className="categoria-titulo">{nombreCategoria}</h3>
                <span className="categoria-cantidad">{items.length} opciones</span>
              </div>
            </div>
            <Carousel productos={items} columnas={4} filas={esGrande ? 1 : 1} />
          </div>
        );
      })}
    </section>
  );
};


export default ItemListContainer;