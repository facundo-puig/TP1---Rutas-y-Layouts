import ProductCard from "@/app/components/ProductCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const categoriasHG = ["placas-de-video", "microprocesadores", "memorias-ram", "almacenamiento"];

export default async function Productos() {
  const resultados = await Promise.all(
    categoriasHG.map((cat) =>
      fetch(`${BASE_URL}/api/scraper?categoria=${cat}`, {
        next: { revalidate: 3600 },
      }).then((res) => res.json())
    )
  );

  const productos = resultados.flat();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductCard key={`${producto.categoria}-${producto.slug}`} producto={producto} />
        ))}
      </div>
    </div>
  );
}