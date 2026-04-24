import Link from "next/link";
import Image from "next/image";
import { productos } from "@/lib/productos";

export default async function CategoriaPage({ params, searchParams }) {
  const { categoria } = await params;
  const { marca } = await searchParams;

  const items = productos.filter(p =>
    p.categoria === categoria && (marca ? p.marca === marca : true)
  );

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold capitalize">{categoria.replace(/-/g, " ")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {items.map(p => (
          <Link
            key={p.id}
            href={`/productos/${p.categoria}/${p.slug}`}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 hover:border-purple-500 transition flex flex-col items-center gap-4"
          >
            {p.imagen && (
              <div className="w-40 h-40 relative shrink-0">
                <Image src={p.imagen} alt={p.nombre} fill sizes="160px" className="object-contain" />
              </div>
            )}
            <div className="text-center w-full">
              <h2 className="text-zinc-100 text-base font-medium">{p.nombre}</h2>
              <p className="text-xl font-bold text-green-400 mt-2">
                ${p.precio.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}