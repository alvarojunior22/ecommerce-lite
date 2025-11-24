import { Product } from "@/interfaces/product";
import Image from "next/image";
import { Button } from "../button/button";
import { Badge } from "../badge/badge";
import { ShoppingBag } from "lucide-react";
import { propsCard } from "./types/Typecard";

interface ProductCardProps {
  product: Product;
  props: propsCard
}

const ProductCard = ({ product, props }: ProductCardProps) => {
  const { title, type, imageUrl, footer } = props

  return (
    <article
      className={`border rounded-lg shadow-md p-4 ${
        type === "green" ? "bg-green-100" :
        type === "white" ? "bg-white" :
        "bg-black text-white"
      }`}
    >
      
      <Image
        src={imageUrl ?? product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
     
        <h2 className="text-xl font-bold">{title}</h2>

       
        <p className="text-gray-500">{product.category}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>

       

        
        {footer && (
          <div className="mt-4">
            {footer}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard