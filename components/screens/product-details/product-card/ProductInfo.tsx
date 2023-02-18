import { IProductDetails } from "@/pages/product/[id]";
import Image from "next/image";
import { FC } from "react";
import styles from "./ProductCard.module.scss";

const ProductInfo: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>
      <div>
        <p>{product.description}</p>
      </div>
      {product.images.map((image, idx) => (
        <button key={idx}>
          <Image src={image} alt="" width={100} height={100} />
        </button>
      ))}
    </div>
  );
};

export default ProductInfo;
