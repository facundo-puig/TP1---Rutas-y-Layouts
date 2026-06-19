import Link from "next/link";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getDestacados() {
  const categorias = ["placas-de-video", "microprocesadores"];

  const resultados = await Promise.all(
    categorias.map((cat) =>
      fetch(`${BASE_URL}/api/scraper?categoria=${cat}`, {
        next: { revalidate: 3600 },
      }).then((res) => res.json())
    )
  );

  return resultados.flatMap((items) => items.slice(0, 3));
}

export default async function Home() {
  const destacados = await getDestacados();

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 text-center">
      <div className="w-full rounded-2xl overflow-hidden">
        <Image src={"/hero-image.png"} width={1000} height={40} alt="Hero" className="w-full" />
      </div>
      {/* Banner de beneficios */}
      <div className="flex items-center justify-around mt-8 bg-zinc-800 rounded-2xl px-8 py-4 text-sm">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" className="icon icon-tabler icons-tabler-filled icon-tabler-credit-card"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2m5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z" /></svg>
          <div className="text-left">
            <p className="font-semibold text-zinc-100">Hasta 3 cuotas sin interés</p>
            <p className="text-zinc-100">abonando con tarjeta de crédito</p>
          </div>
        </div>
        <div className="w-px h-10 bg-zinc-600" />
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><path d="M3 9l4 0" /></svg>
          <p className="text-zinc-100 font-semibold">Envíos rápidos a todo el país.</p>
        </div>
        <div className="w-px h-10 bg-zinc-600" />
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" className="icon icon-tabler icons-tabler-filled icon-tabler-shield"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.884 2.007l.114 -.007l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021z" /></svg>
          <div className="text-left">
            <p className="font-semibold text-zinc-100">Garantía oficial</p>
            <p className="text-zinc-100">de hasta 12 meses en todos los productos.</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex items-center justify-start mt-8 rounded-2xl px-8 py-4 text-sm">
        <div className="flex flex-col items-start gap-3 w-full">
          <h3 className="text-white font-bold text-xl">Productos Destacados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {destacados.map((p) => (
              <Link
                key={p.slug}
                href={`/productos/${p.categoria}/${p.slug}`}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 hover:border-purple-500 transition"
              >
                <div className="flex items-center gap-4">
                  {p.imagen && (
                    <div className="w-24 h-24 relative shrink-0 rounded-lg overflow-hidden">
                      <Image src={p.imagen} alt={p.nombre} fill className="object-contain" />
                    </div>
                  )}
                  <div className="text-left">
                    <h2 className="text-zinc-100 text-lg">{p.nombre}</h2>
                    <p className="text-lg text-green-600 font-bold mt-2">${p.precio.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/productos"
        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition mt-6 inline-block"
      >
        Ver productos
      </Link>
    </div>
  );
}