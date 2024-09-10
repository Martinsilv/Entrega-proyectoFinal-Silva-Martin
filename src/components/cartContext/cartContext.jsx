import { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

export const CartProvider = ({children}) => {

    // Inicializa el carrito desde el localStorage o con un array vacío
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
    const [carrito, setCarrito] = useState(carritoLS);

    const agregarAlCarrito = (item, count) => {
        const itemAgregado = {...item, cantidad: count};

        const nuevoCarrito = [...carrito];
        const productAgregado = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);

        if (productAgregado) {
            productAgregado.cantidad += count;
        } else {
            nuevoCarrito.push(itemAgregado);
        }

        setCarrito(nuevoCarrito);
        console.log(carrito);
    };

    const contadorCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const totalCarrito = () => {
        const carritoFixed = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
        return carritoFixed.toFixed(2);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // Guarda el carrito en el localStorage cada vez que se actualice
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CardContext.Provider value={{carrito, agregarAlCarrito, contadorCarrito, totalCarrito, vaciarCarrito}}>
            {children}
        </CardContext.Provider>
    );
};