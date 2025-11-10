import { products } from "@/data/producto.data";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
