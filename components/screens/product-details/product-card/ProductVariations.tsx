import { FC, useState } from "react";
import styles from "./ProductCard.module.scss";
import ProductRating from "./product-variations/ProductRating";
import SizeVariations from "./product-variations/SizeVariations";
import { TypeSize } from "@/app/store/cart/cart.types";
import CarouselButton from "@/components/ui/catalog/carousel/carousel-item/CarouselButton";
import { IProductDetails } from "@/pages/product/[id]";

const ProductVariations: FC<IProductDetails> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>("SHORT");
  return (
    <div className={styles.variations}>
      <ProductRating />
      <SizeVariations
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <CarouselButton product={product} selectedSize={selectedSize} />
    </div>
  );
};

export default ProductVariations;
