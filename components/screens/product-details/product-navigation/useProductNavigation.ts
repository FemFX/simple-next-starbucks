import { products } from "@/app/data/product.data";

export const useProductNavigation = (productId: number) => {
  const nextProductId = productId + 1;
  const prevProductId = productId - 1;
  return {
    isNextDisabled: productId === products.length,
    isPrevDisabled: productId === 1,
    nextProductId,
    prevProductId,
  };
};
