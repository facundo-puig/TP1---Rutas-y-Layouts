"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function AgregarAlCarrito({ producto }) {
    const { agregar } = useCart();
    const [cantidad, setCantidad] = useState(1);
    const [agregado, setAgregado] = useState(false);

    function handleAgregar() {
        for (let i = 0; i < cantidad; i++) {
            agregar(producto);
        }
        setAgregado(true);
        setTimeout(() => {
            setAgregado(false);
            setCantidad(1);
        }, 1500);
    }

    return (
        <div className="flex flex-col gap-3">
            {/* Contador */}
            <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-400">Cantidad:</span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCantidad(c => Math.max(1, c - 1))}
                        className="w-8 h-8 bg-zinc-700 hover:bg-zinc-600 rounded text-white flex items-center justify-center transition"
                    >
                        −
                    </button>
                    <span className="text-zinc-100 font-medium w-6 text-center">{cantidad}</span>
                    <button
                        onClick={() => setCantidad(c => c + 1)}
                        className="w-8 h-8 bg-zinc-700 hover:bg-zinc-600 rounded text-white flex items-center justify-center transition"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Botón */}
            <button
                onClick={handleAgregar}
                className={`w-full font-semibold py-3 px-6 rounded-lg cursor-pointer transition ${agregado
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
            >
                {agregado ? `✓ ${cantidad > 1 ? cantidad + " productos agregados" : "Agregado al carrito"}` : "Agregar al carrito"}
            </button>
        </div>
    );
}