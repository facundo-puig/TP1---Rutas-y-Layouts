"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const { carrito, quitar, cambiarCantidad, vaciar, total } = useCart();

    if (carrito.length === 0) {
        return (
            <main className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h1 className="text-2xl font-bold text-zinc-100 mb-4">Tu carrito está vacío</h1>
                <p className="text-zinc-400 mb-8">Agregá productos desde el catálogo.</p>
                <Link
                    href="/productos"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Ver productos
                </Link>
            </main>
        );
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold text-zinc-100 mb-8">Tu carrito</h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Lista de productos */}
                <div className="flex-1 flex flex-col gap-4">
                    {carrito.map(p => (
                        <div
                            key={p.id}
                            className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-4 items-center"
                        >
                            {/* Imagen */}
                            {p.imagen && (
                                <div className="w-20 h-20 relative shrink-0">
                                    <Image
                                        src={p.imagen}
                                        alt={p.nombre}
                                        fill
                                        sizes="80px"
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            )}

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <h2 className="text-zinc-100 font-medium text-sm leading-snug line-clamp-2">
                                    {p.nombre}
                                </h2>
                                <p className="text-green-400 font-bold mt-1">
                                    ${p.precio.toLocaleString()}
                                </p>
                            </div>

                            {/* Cantidad */}
                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    onClick={() => cambiarCantidad(p.id, p.cantidad - 1)}
                                    className="w-7 h-7 bg-zinc-700 hover:bg-zinc-600 rounded text-white flex items-center justify-center transition"
                                >
                                    −
                                </button>
                                <span className="text-zinc-100 w-4 text-center">{p.cantidad}</span>
                                <button
                                    onClick={() => cambiarCantidad(p.id, p.cantidad + 1)}
                                    className="w-7 h-7 bg-zinc-700 hover:bg-zinc-600 rounded text-white flex items-center justify-center transition"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal */}
                            <p className="text-zinc-300 font-semibold text-sm w-24 text-right shrink-0">
                                ${(p.precio * p.cantidad).toLocaleString()}
                            </p>

                            {/* Eliminar */}
                            <button
                                onClick={() => quitar(p.id)}
                                className="text-red-400 hover:text-red-300 transition text-xs shrink-0"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={vaciar}
                        className="text-sm text-zinc-500 hover:text-zinc-300 transition self-start mt-2"
                    >
                        Vaciar carrito
                    </button>
                </div>

                {/* Resumen */}
                <div className="lg:w-72 shrink-0">
                    <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col gap-4 sticky top-24">
                        <h2 className="text-lg font-bold text-zinc-100">Resumen</h2>

                        <div className="flex flex-col gap-2 text-sm text-zinc-400 border-b border-zinc-700 pb-4">
                            {carrito.map(p => (
                                <div key={p.id} className="flex justify-between">
                                    <span className="truncate max-w-40">{p.nombre}</span>
                                    <span className="text-zinc-300 shrink-0 ml-2">
                                        x{p.cantidad}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-zinc-300 font-medium">Total</span>
                            <span className="text-green-400 font-bold text-xl">
                                ${total.toLocaleString()}
                            </span>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
                            Finalizar compra
                        </button>

                        <Link
                            href="/productos"
                            className="text-center text-sm text-zinc-500 hover:text-zinc-300 transition"
                        >
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
