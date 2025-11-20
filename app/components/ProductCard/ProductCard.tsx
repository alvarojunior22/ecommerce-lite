import { Product } from "@/interfaces/product";
import Image from "next/image";
import { Button } from "../button/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="border rounded-lg shadow-md p-4">
      <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
      </div>
      <div className="mt-4">
        <Button text="buy" variant="primary" size="md" />
      </div>
      
    </article>
  );
};

export default ProductCard;
