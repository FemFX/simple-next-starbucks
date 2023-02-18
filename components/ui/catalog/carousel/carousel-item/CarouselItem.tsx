import { IProduct } from "@/app/types/product.interface";
import Image from "next/image";
import { FC, useState } from "react";
import styles from "../Carousel.module.scss";
import cn from "clsx";
import CarouselButton from "./CarouselButton";
import CarouselVariations from "./CarouselVariations";
import { TypeSize } from "@/app/store/cart/cart.types";
import { motion } from "framer-motion";
import Link from "next/link";

interface ICarouselItemProps {
  product: IProduct;
  isActive: boolean;
  selectItem: () => void;
}

const CarouselItem: FC<ICarouselItemProps> = ({
  product,
  isActive,
  selectItem,
}) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>("SHORT");
  return (
    <motion.button
      animate={{ scale: isActive ? 1.12 : 1 }}
      transition={{
        type: "spring",
        duration: 0.7,
      }}
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}
      onClick={selectItem}
    >
      <div>
        <div className="flex items-center ">
          <Image
            src={product.images[0]}
            alt={product.name}
            className={styles.image}
            width={320}
            height={320}
          />
        </div>
        <div className={styles.heading}>{product.name}</div>
        {!isActive ? (
          <div className={styles.description}>{product.description}</div>
        ) : (
          <>
            <CarouselVariations
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <CarouselButton product={product} selectedSize={selectedSize} />
            <Link
              className="text-xs text-center mt-4 block text-white "
              href={`/product/${product.id}`}
            >
              More
            </Link>
          </>
        )}
      </div>
    </motion.button>
  );
};

export default CarouselItem;
