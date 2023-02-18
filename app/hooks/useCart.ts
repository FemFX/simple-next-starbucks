import { useTypedSelector } from "./useTypedSelector";

export const useCart = () => {
  const cart = useTypedSelector((state) => state.cart.items);

  const total = cart.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );
  return { cart, total };
};
