import { FC, useState, useRef } from "react";
import styles from "./Cart.module.scss";
import CartItem from "./cart-item/CartItem";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { formatPrice } from "@/app/utils/formatPrice";
import { useCart } from "@/app/hooks/useCart";

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { cart, total } = useCart();

  return (
    <>
      <div className={styles["wrapper-cart"]}>
        <button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.badge}>{cart.length}</div>
          <span className={styles.text}>my basket</span>
        </button>

        {isOpen && (
          <div className={styles.cart}>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={() => setIsOpen(false)}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader className="uppercase">my basket</DrawerHeader>
                <DrawerBody>
                  {cart.length ? (
                    cart.map((item) => <CartItem key={item.id} item={item} />)
                  ) : (
                    <div>Basket is empty</div>
                  )}
                </DrawerBody>

                <DrawerFooter
                  justifyContent="space-between"
                  borderTopColor="#F7F4F0"
                  borderTopWidth="1px"
                >
                  <div className={styles.footer}>
                    <div>Total:</div>
                    <div>{formatPrice(total)}</div>
                  </div>
                  <button className="text-white bg-green py-2 px-4 rounded">
                    Checkout
                  </button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
