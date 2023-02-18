import { formatPrice } from "@/app/utils/formatPrice";
import { IProductDetails } from "@/pages/product/[id]";
import Image from "next/image";
import { FC } from "react";
import styles from "./ProductCard.module.scss";

const ProductImage: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.image}>
      <Image
        src={product.images[0]}
        alt={product.name}
        width={250}
        height={250}
      />
      <div className={styles.price}>{formatPrice(product.price)}</div>
    </div>
  );
};

export default ProductImage;
