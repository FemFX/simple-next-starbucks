import Image from "next/image";
import { FC } from "react";
import { ICartItem } from "@/app/types/cart.interface";
import styles from "../Cart.module.scss";
import CartActions from "./cart-actions/CartActions";
import { formatPrice } from "@/app/utils/formatPrice";


const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  return (
    <div
      
      className={styles.item}
    >
      <Image
        src={item.product.images[0]}
        alt={item.product.name}
        width={100}
        height={100}
      />
      <div>
        <div className={styles.name}>{item.product.name}</div>
        <div className={styles.price}>{formatPrice(item.product.price)}</div>
        <div className={styles.size}>{item.size}</div>
        <CartActions item={item} />
      </div>
    </div>
  );
};

export default CartItem;
