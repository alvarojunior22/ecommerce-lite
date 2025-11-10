import { useState, useMemo } from "react";
import { Product } from "@interfaces/product";

interface UseProductFilterReturn {
  search: string;
  setSearch: (value: string) => void;
  filteredProducts: Product[];
}

export const useProductFilter = (products: Product[]): UseProductFilterReturn => {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    if (!search) return products;

    const lowerSearch = search.toLowerCase();

    return products.filter((product) => {
      const inName = product.name.toLowerCase().includes(lowerSearch);
      const inDescription = product.description?.toLowerCase().includes(lowerSearch) ?? false;
      const inCategory = product.category.toLowerCase().includes(lowerSearch);
      const inBrand = product.brand.toLowerCase().includes(lowerSearch);
      const inTags = product.tags?.some((tag) => tag.toLowerCase().includes(lowerSearch)) ?? false;

      return inName || inDescription || inCategory || inBrand || inTags;
    });
  }, [products, search]);

  return { search, setSearch, filteredProducts };
};
