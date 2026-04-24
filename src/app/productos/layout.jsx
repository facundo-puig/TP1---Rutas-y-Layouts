import Link from "next/link";

const categorias = [
  {
    nombre: "Placas de Video",
    slug: "placas-de-video",
    subcategorias: [
      { nombre: "AMD", slug: "amd" },
      { nombre: "NVIDIA", slug: "nvidia" },
    ]
  },
  {
    nombre: "Procesadores",
    slug: "procesadores",
    subcategorias: [
      { nombre: "AMD", slug: "amd" },
      { nombre: "Intel", slug: "intel" },
    ],
  },
  { nombre: "Memorias RAM", slug: "memorias-ram" },
  { nombre: "Almacenamiento", slug: "almacenamiento" },
];

export default function ProductosLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-950 gap-2 px-8 py-8">
      <aside className="w-48 shrink-0 h-fit sticky top-12 py-10 pl-4">
        <h2 className="text-md font-semibold text-zinc-500 uppercase tracking-widest mb-4">
          Categorías
        </h2>

        <div className="space-y-1">
          {categorias.map((cat) => (
            <div key={cat.slug}>
              {cat.subcategorias ? (
                <>
                  <Link
                    href={`/productos/${cat.slug}`}
                    className="block text-md font-semibold text-zinc-300 hover:text-white transition py-1.5 whitespace-nowrap"
                  >
                    {cat.nombre}
                  </Link>
                  <ul className="mb-2">
                    {cat.subcategorias.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/productos/${cat.slug}?marca=${sub.slug}`}
                          className="block text-sm text-zinc-500 hover:text-zinc-200 transition py-1 pl-3 border-l border-zinc-700 hover:border-purple-500"
                        >
                          {sub.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={`/productos/${cat.slug}`}
                  className="block text-md font-semibold text-zinc-300 hover:text-white transition py-1.5 whitespace-nowrap"
                >
                  {cat.nombre}
                </Link>
              )}
            </div>
          ))}
        </div>
      </aside>

      {children}
    </div>
  );
}