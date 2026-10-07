import Carousel from "../carousel/Carousel";


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
    { id: 6, nombre: "Muzzarella", categoria: "Pizzas", descripcion: "Salsa de tomate y mozzarella.", precio: 13000, cantidad: 0 },
    { id: 7, nombre: "Anchoas (sin muzzarella)", categoria: "Pizzas", descripcion: "Salsa de tomate y anchoas, sin mozzarella.", precio: 13000, cantidad: 0 },
    { id: 8, nombre: "Primavera", categoria: "Pizzas", descripcion: "Mozzarella, rodajas de tomate y huevo duro picado.", precio: 16000, cantidad: 0 },
    { id: 9, nombre: "Jamón", categoria: "Pizzas", descripcion: "Mozzarella y jamón.", precio: 15000, cantidad: 0 },
    { id: 10, nombre: "Jamón y Morrón", categoria: "Pizzas", descripcion: "Mozzarella, jamón y morrón.", precio: 17000, cantidad: 0 },
    { id: 11, nombre: "Fugazza", categoria: "Pizzas", descripcion: "Cebolla y orégano, sin mozzarella.", precio: 11000, cantidad: 0 },
    { id: 12, nombre: "Fugazza c/muzzarella", categoria: "Pizzas", descripcion: "Cebolla, mozzarella y orégano.", precio: 13000, cantidad: 0 },
    { id: 13, nombre: "Fugazza c/muzzarella y Jamón", categoria: "Pizzas", descripcion: "Cebolla, mozzarella, jamón y orégano.", precio: 15000, cantidad: 0 },
    { id: 14, nombre: "Napolitana", categoria: "Pizzas", descripcion: "Mozzarella, rodajas de tomate y ajo.", precio: 15000, cantidad: 0 },
    { id: 15, nombre: "Napolitana c/jamón", categoria: "Pizzas", descripcion: "Mozzarella, rodajas de tomate, jamón y ajo.", precio: 16000, cantidad: 0 },
    { id: 16, nombre: "Calabresa", categoria: "Pizzas", descripcion: "Mozzarella, longaniza y morrón picado.", precio: 17000, cantidad: 0 },
    { id: 17, nombre: "Jamón y Ananá", categoria: "Pizzas", descripcion: "Mozzarella, jamón y ananá.", precio: 20000, cantidad: 0 },
    { id: 18, nombre: "Palmitos y Jamón", categoria: "Pizzas", descripcion: "Mozzarella, jamón, palmitos y salsa golf.", precio: 19000, cantidad: 0 },
    { id: 19, nombre: "Especial Palmitos", categoria: "Pizzas", descripcion: "Mozzarella, jamón, palmitos, salsa golf, roquefort y aceitunas negras.", precio: 20000, cantidad: 0 },
    { id: 20, nombre: "Roquefort", categoria: "Pizzas", descripcion: "Mozzarella, roquefort y aceitunas negras.", precio: 17000, cantidad: 0 },
    { id: 21, nombre: "Provolone", categoria: "Pizzas", descripcion: "Mozzarella, provolone y aceitunas negras.", precio: 17000, cantidad: 0 },
    { id: 22, nombre: "Panceta", categoria: "Pizzas", descripcion: "Mozzarella y panceta.", precio: 17000, cantidad: 0 },
    { id: 23, nombre: "Tres quesos", categoria: "Pizzas", descripcion: "Mozzarella, provolone y roquefort.", precio: 17000, cantidad: 0 },
    { id: 24, nombre: "Anchoas c/Mozzarella", categoria: "Pizzas", descripcion: "Mozzarella y anchoas.", precio: 17000, cantidad: 0 },

    // EMPANADAS
    { id: 29, nombre: "Empanada de carne suave", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 30, nombre: "Empanada de carne picante", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 31, nombre: "Empanada de pollo", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 32, nombre: "Empanada de jamón y queso", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 33, nombre: "Empanada de humita", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 34, nombre: "Empanada de roquefort y jamón", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 35, nombre: "Empanada de cebolla y queso", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 36, nombre: "Empanada de verdura", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 37, nombre: "Empanada de panceta y ciruela", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 38, nombre: "Empanada caprese", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 39, nombre: "Empanada de jamón y ananá", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },
    { id: 40, nombre: "Empanada calabresa", categoria: "Empanadas", descripcion: "Unidad.", precio: 2100, cantidad: 0 },

    // CALZONES
    { id: 41, nombre: "Calzone Napolitano", categoria: "Calzones", descripcion: "Mozzarella, rodajas de tomate, jamón y ajo.", precio: 18000, cantidad: 0 },
    { id: 42, nombre: "Calzone Roquefort", categoria: "Calzones", descripcion: "Mozzarella, roquefort, tomate, ajo, jamón y morrones.", precio: 21000, cantidad: 0 },
    { id: 43, nombre: "Calzone Palmitos", categoria: "Calzones", descripcion: "Mozzarella, palmitos, salsa golf y jamón.", precio: 21000, cantidad: 0 },
    { id: 44, nombre: "Calzone 4 Hermanos", categoria: "Calzones", descripcion: "Mozzarella, rodajas de tomate, jamón, longaniza, morrón y ajo.", precio: 21000, cantidad: 0 },

    // PIZZAS RELLENAS
    { id: 45, nombre: "Fugazzetta", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, cebolla, pimienta, aceitunas verdes, aceite de oliva y orégano. Aprox. 1 hora de demora.", precio: 19000, cantidad: 0 },
    { id: 46, nombre: "Fugazzetta c/jamón", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, jamón, cebolla, pimienta, aceitunas verdes, aceite de oliva y orégano. Aprox. 1 hora de demora.", precio: 21000, cantidad: 0 },
    { id: 47, nombre: "Fugazzetta Napolitana", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, cebolla, pimienta, rodajas de tomate, provenzal, aceitunas verdes, aceite de oliva y orégano. Aprox. 1 hora de demora.", precio: 21000, cantidad: 0 },
    { id: 48, nombre: "Fugazzetta Especial", categoria: "Pizzas Rellenas", descripcion: "Mozzarella, cebolla, pimienta, jamón, morrones, palmitos, aceitunas verdes y orégano. Aprox. 1 hora de demora.", precio: 24000, cantidad: 0 },

    // ADICIONALES
    { id: 49, nombre: "Porción de fainá", categoria: "Adicionales", descripcion: "Porción individual.", precio: 1100, cantidad: 0 },
    { id: 25, nombre: "Sándwich N°1 (para 2 personas)", categoria: "Adicionales", descripcion: "Milanesa de carne, lechuga, tomate, jamón, muzzarella y huevo rallado.", precio: 18000, cantidad: 0 },
    { id: 26, nombre: "Sándwich N°2 (para 2 personas)", categoria: "Adicionales", descripcion: "Milanesa de carne, lechuga, tomate, jamón, muzzarella, huevo rallado, morrón, palmitos y salsa golf.", precio: 21000, cantidad: 0 },
    { id: 27, nombre: "Sándwich individual", categoria: "Adicionales", descripcion: "Milanesa de carne, lechuga, tomate, jamón y muzzarella.", precio: 10000, cantidad: 0 },
    { id: 50, nombre: "Gaseosa 2.25 Lts", categoria: "Adicionales", descripcion: "Coca Cola, Coca Cola sin azúcar, Fanta o Sprite.", precio: 5300, cantidad: 0 },
    { id: 51, nombre: "Gaseosa 1.75 Lts", categoria: "Adicionales", descripcion: "Coca Cola, Coca Cola sin azúcar, Fanta o Sprite.", precio: 4500, cantidad: 0 },

    
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
            <div className="categoria-encabezado">
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