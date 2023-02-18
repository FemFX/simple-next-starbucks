import { TypeSize } from "@/app/store/cart/cart.types";
import { ICarouselVariationsProps } from "@/components/ui/catalog/carousel/carousel-item/CarouselVariations";
import { FC } from "react";
import cn from "clsx";
import styles from "../ProductCard.module.scss";

const SIZES: TypeSize[] = ["SHORT", "TALL", "GRANDE", "VENTI"];

const SizeVariations: FC<ICarouselVariationsProps> = ({
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="flex gap-3">
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

export default SizeVariations;
