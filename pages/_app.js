import { useState } from "react";
import { useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    if (carritoLS.length !== 0) {
      setCarrito(carritoLS);
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const isNewProduct = (producto) => {
    if (carrito.some((articulo) => articulo.id === producto.id)) {
      updateCantidad(producto);
      return;
    }

    agregarAlCarrito(producto);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const updateCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado);
  };

  return (
    <Component {...pageProps} 
      carrito={carrito} 
      isNewProduct={isNewProduct} 
      updateCantidad = {updateCantidad}
    />
  );
}

export default MyApp;
