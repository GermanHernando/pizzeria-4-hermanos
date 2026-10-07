import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const abrirCarrito = () => setCarritoAbierto(true);
  const cerrarCarrito = () => setCarritoAbierto(false);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const yaExiste = prevCarrito.find((item) => item.id === producto.id);
      if (yaExiste) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const descontarDelCarrito = (id) => {
    setCarrito((prevCarrito) => {
      const item = prevCarrito.find((item) => item.id === id);

      if (!item) return prevCarrito;

      if (item.cantidad === 1) {
        return prevCarrito.filter((item) => item.id !== id);
      }

      return prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const generarMensaje = () => {
    let mensaje = ' *Nuevo pedido -🍕 Pizzería 4 Hermanos*\n\n';

    carrito.forEach((item) => {
      mensaje += `${item.cantidad}x ${item.nombre} - $${item.precio * item.cantidad}\n`;
    });

    const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    mensaje += `\n*Total: $${total}*`;
    return mensaje;
  };

  const finalizarPedido = () => {
    const numero = '5491124738876';
    const mensaje = generarMensaje();
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    vaciarCarrito();
    cerrarCarrito();
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        descontarDelCarrito,
        quitarDelCarrito,
        finalizarPedido,
        carritoAbierto,
        abrirCarrito,
        cerrarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

