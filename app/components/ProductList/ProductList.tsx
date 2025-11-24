
'use client';

import { products } from "@/data/producto.data";
import ProductCard from "../ProductCard/ProductCard";
import { useProductFilter } from "@/hooks/filters";
import { Button } from "../button/button";
import { Badge } from "../badge/badge";
import { ShoppingBag } from "lucide-react";

const ProductList = () => {
  const { search, setSearch, filteredProducts } = useProductFilter(products);

  return (
    <section className="p-4">
      <input
        type="text"
        placeholder="search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.sku}
            product={product}
            props={{
              title: product.name,
              type: "white",
              imageUrl: product.imageUrl,
              footer: (
                <div className="flex flex-col gap-6">
                  <Button text="Buy" />
                  <Badge icon={<ShoppingBag/>} label="Disponible" />
                </div>
              )
            }}
          />
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Product Not found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
