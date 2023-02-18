import { FC, useState } from "react";
import CarouselItem from "./carousel-item/CarouselItem";
import { IProduct } from "@/app/types/product.interface";
import styles from "./Carousel.module.scss";

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  // const nextHandler = () => {
  //   selectedItem !== products.length - 1 && setSelectedItem(selectedItem + 1);
  // };
  // const prevHandler = () => {
  //   selectedItem > 0 && setSelectedItem(selectedItem - 1);
  // };

  return (
    <section className={styles.carousel}>
      {products.map((product) => (
        <CarouselItem
          key={product.id}
          product={product}
          isActive={selectedItem === product.id}
          selectItem={() => setSelectedItem(product.id)}
        />
      ))}
    </section>
  );
};

export default Carousel;
