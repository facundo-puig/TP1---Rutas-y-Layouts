import ProductCard from "@/app/components/ProductCard";
import { productos } from "@/lib/productos";

export default function Productos() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
}