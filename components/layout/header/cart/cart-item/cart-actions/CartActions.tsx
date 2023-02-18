import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { FC } from "react";
import { useActions } from "@/app/hooks/useActions";
import { ICartItem } from "@/app/types/cart.interface";

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const { removeFromCart, changeQuantity } = useActions();

  return (
    <div className="mt-3">
      <HStack>
        <Button
          {...dec}
          disabled={item.quantity === 1}
          onClick={() => changeQuantity({ id: item.id, type: "minus" })}
        >
          -
        </Button>
        <Input
          {...input}
          value={item.quantity}
          focusBorderColor="green.400"
          readOnly
          _hover={{ cursor: "default" }}
        />
        <Button
          onClick={() => changeQuantity({ id: item.id, type: "plus" })}
          {...inc}
        >
          +
        </Button>
      </HStack>
      <Button
        variant="link"
        color="#F23C3D"
        marginTop={2}
        size="sm"
        onClick={() => removeFromCart({ id: item.id })}
      >
        Remove
      </Button>
    </div>
  );
};

export default CartActions;
