import { FC } from "react";
import styles from "./ProductCard.module.scss";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import ProductVariations from "./ProductVariations";
import { IProductDetails } from "@/pages/product/[id]";

const ProductCard: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.card}>
      <ProductInfo product={product} />
      <ProductImage product={product} />
      <ProductVariations product={product} />
    </div>
  );
};

export default ProductCard;
