"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    // Cargar desde localStorage al montar
    useEffect(() => {
        const guardado = localStorage.getItem("carrito");
        if (guardado) setCarrito(JSON.parse(guardado));
    }, []);

    // Guardar en localStorage cada vez que cambia el carrito
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    function agregar(producto) {
        setCarrito(prev => {
            const existe = prev.find(p => p.id === producto.id);
            if (existe) {
                return prev.map(p =>
                    p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
                );
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });
    }

    function quitar(id) {
        setCarrito(prev => prev.filter(p => p.id !== id));
    }

    function cambiarCantidad(id, cantidad) {
        if (cantidad < 1) return quitar(id);
        setCarrito(prev =>
            prev.map(p => p.id === id ? { ...p, cantidad } : p)
        );
    }

    function vaciar() {
        setCarrito([]);
    }

    const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const cantidadTotal = carrito.reduce((acc, p) => acc + p.cantidad, 0);

    return (
        <CartContext.Provider value={{ carrito, agregar, quitar, cambiarCantidad, vaciar, total, cantidadTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}