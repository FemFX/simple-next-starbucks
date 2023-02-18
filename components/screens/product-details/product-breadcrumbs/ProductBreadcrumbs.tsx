import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { IProduct } from "@/app/types/product.interface";

const ProductBreadcrumbs: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Breadcrumb justifyContent="end" display="flex" marginTop={8}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          Catalog
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{product.name}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default ProductBreadcrumbs;
