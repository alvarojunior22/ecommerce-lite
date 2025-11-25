"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { products as initialProducts } from "@/data/producto.data";

export default function ShopPage() {
  const [items] = useState(initialProducts.slice(0, 6)); // Solo los primeros 6
  const router = useRouter();

  const handleShowMore = () => {
    router.push("/views/login"); 
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">Tienda</h1>

      <p className="text-gray-600 mb-8">
        Explora nuestra selección de productos disponibles. Calidad garantizada.
      </p>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((product) => (
          <ProductCard
            key={product.sku}
            product={product}
            props={{
              title: product.name,
              type: "white",
            }}
          />
        ))}
      </div>

      {/* Botón SHOW MORE */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleShowMore}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Show more
        </button>
      </div>
    </main>
  );
}
