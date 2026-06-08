import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ producto }) {
    return (
        <Link
            href={`/productos/${producto.categoria}/${producto.slug}`}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 hover:border-purple-500 transition flex flex-col items-center gap-4"
        >
            {producto.imagen && (
                <div className="w-40 h-40 relative shrink-0">
                    <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        fill
                        sizes="160px"
                        className="object-contain"
                    />
                </div>
            )}

            <div className="text-center w-full">
                <p className="text-xs text-purple-400 mb-1 capitalize">
                    {producto.categoria.replace(/-/g, " ")}
                </p>

                <h2 className="text-zinc-100 text-base font-medium">
                    {producto.nombre}
                </h2>

                <p className="text-xl font-bold text-green-400 mt-2">
                    ${producto.precio.toLocaleString()}
                </p>
            </div>
        </Link>
    );
}