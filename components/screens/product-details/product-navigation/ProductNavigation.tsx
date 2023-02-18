import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { FC } from "react";
import styles from "./ProductNavigation.module.scss";
import { useProductNavigation } from "./useProductNavigation";
import cn from "clsx";

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
  const { isNextDisabled, isPrevDisabled, nextProductId, prevProductId } =
    useProductNavigation(productId);

  return (
    <div className={styles.nav}>
      <Link
        href={`/product/${prevProductId}`}
        className={cn({
          [styles.disabled]: isPrevDisabled,
        })}
      >
        <ChevronLeftIcon fontSize={46} color="#333" />
      </Link>
      <Link
        href={`/product/${nextProductId}`}
        className={cn({
          [styles.disabled]: isNextDisabled,
        })}
      >
        <ChevronRightIcon fontSize={46} color="#333" />
      </Link>
    </div>
  );
};

export default ProductNavigation;
