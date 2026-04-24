"use client";
import { useState } from "react";

export default function EnvioModal() {
    const [abierto, setAbierto] = useState(false);
    const [cp, setCp] = useState("");

    return (
        <>
            {/* Botón */}
            <button
                onClick={() => setAbierto(true)}
                className="flex items-center gap-3 w-full hover:bg-zinc-700 rounded-lg p-2 -m-2 cursor-pointer transition text-left"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><path d="M3 9l4 0" /></svg>
                <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-100">Envíos a todo el país</p>
                    <p className="text-xs text-zinc-400">Calculá el costo de envío</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Modal */}
            {abierto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setAbierto(false)}
                    />

                    {/* Contenido */}
                    <div className="relative bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-full max-w-sm mx-4 flex flex-col gap-4">

                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-zinc-100">Calcular envío</h2>
                            <button
                                onClick={() => setAbierto(false)}
                                className="text-zinc-400 hover:text-white cursor-pointer transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <p className="text-sm text-zinc-400">Ingresá tu código postal para ver las opciones de envío disponibles.</p>

                        <input
                            type="text"
                            placeholder="Ej: 1425"
                            value={cp}
                            onChange={(e) => setCp(e.target.value)}
                            className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition"
                        />

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg cursor-pointer transition">
                            Calcular
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}