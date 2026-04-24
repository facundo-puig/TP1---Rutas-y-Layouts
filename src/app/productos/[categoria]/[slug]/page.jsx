import { productos } from "@/lib/productos";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnvioModal from "@/app/components/EnvioModal";

export default async function ProductoPage({ params }) {
    const { categoria, slug } = await params;

    const producto = productos.find(
        (p) => p.categoria === categoria && p.slug === slug
    );

    if (!producto) return notFound();

    return (
        <main className="w-full mx-auto pr-72 pl-40 py-8">

            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
                <Link href="/productos" className="hover:text-white transition">
                    ← Volver al listado
                </Link>
                <span>|</span>
                <span>
                    Productos {" > "}
                    <Link href={`/productos/${categoria}`} className="text-purple-400 hover:text-purple-300 transition capitalize">
                        {categoria.replace(/-/g, " ")}
                    </Link>
                </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">

                {/* Imagen */}
                <div className="basis-3/5 shrink-0 md:w-80 bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex items-center justify-center min-h-80">
                    {producto.imagen ? (
                        <div className="w-96 h-96 relative">
                            <Image
                                src={producto.imagen}
                                alt={producto.nombre}
                                fill
                                sizes="320px"
                                loading="eager"
                                className="object-contain"
                            />
                        </div>
                    ) : (
                        <div className="w-80 h-80 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-500">
                            Sin imagen
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="basis-2/5 flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-zinc-100 leading-snug">{producto.nombre}</h1>
                            {producto.marca && (
                                <p className="text-sm text-zinc-400 capitalize mt-1">Marca: {producto.marca}</p>
                            )}
                        </div>

                        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-3">
                            <p className="text-3xl font-bold text-green-400">
                                ${producto.precio.toLocaleString()}
                            </p>
                            <p className="text-sm text-zinc-400">
                                3 cuotas sin interés de{" "}
                                <span className="text-zinc-200 font-medium">
                                    ${Math.round(producto.precio / 3).toLocaleString()}
                                </span>
                            </p>
                        </div>

                        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-3">
                            <EnvioModal />
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" className="icon icon-tabler icons-tabler-filled icon-tabler-shield"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.884 2.007l.114 -.007l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021z" /></svg>
                                <div>
                                    <p className="text-sm font-medium text-zinc-100">Garantía</p>
                                    <p className="text-xs text-zinc-400">Plazo: 12 meses</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5cff7c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                                <p className="text-sm font-medium text-green-400">En stock</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition">
                        Comprar
                    </button>

                </div>
            </div>

            {/* Descripción */}
            {producto.descripcion && (
                <div className="mt-8 bg-zinc-800 border border-zinc-700 rounded-xl p-8">
                    <h2 className="text-lg font-semibold text-zinc-100 mb-4 pb-3 border-b border-zinc-700">
                        Descripción del producto
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                        {producto.descripcion}
                    </p>
                </div>
            )}
        </main>
    );
}