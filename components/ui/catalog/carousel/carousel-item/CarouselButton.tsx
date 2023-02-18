import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useActions } from "@/app/hooks/useActions";
import { IProduct } from "@/app/types/product.interface";
import { TypeSize } from "@/app/store/cart/cart.types";

interface ICarouselButtonProps {
  product: IProduct;
  selectedSize: TypeSize;
}

const CarouselButton: FC<ICarouselButtonProps> = ({
  product,
  selectedSize,
}) => {
  const { addToCart } = useActions();

  return (
    <div className="text-center">
      <Button
        onClick={() =>
          addToCart({
            product,
            quantity: 1,
            size: selectedSize,
          })
        }
        color="rgba(108, 148, 107, 1)"
        className="tracking-widest"
        marginTop={8}
        borderRadius={20}
        fontWeight={500}
        textTransform="uppercase"
        fontSize={12}
      >
        Add To Basket
      </Button>
    </div>
  );
};

export default CarouselButton;
