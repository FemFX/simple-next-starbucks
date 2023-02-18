import { FC, Dispatch, SetStateAction } from "react";
import styles from "../Carousel.module.scss";
import { TypeSize } from "@/app/store/cart/cart.types";
import cn from "clsx";

const SIZES: TypeSize[] = ["SHORT", "TALL", "GRANDE", "VENTI"];

export interface ICarouselVariationsProps {
  // productId: number;
  selectedSize: TypeSize;
  setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
}

const CarouselVariations: FC<ICarouselVariationsProps> = ({
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className={styles.variations}>
      {SIZES.map((size) => (
        <button
          onClick={() => setSelectedSize(size)}
          className={cn({
            [styles.active]: selectedSize === size,
          })}
          key={size}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default CarouselVariations;
