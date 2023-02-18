import { FC } from "react";
import Layout from "../../layout/Layout";
import Heading from "@/components/ui/heading/Heading";
import { IProductDetails } from "@/pages/product/[id]";
import ProductBreadcrumbs from "./product-breadcrumbs/ProductBreadcrumbs";
import ProductNavigation from "./product-navigation/ProductNavigation";
import ProductCard from "./product-card/ProductCard";

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <Layout title={product.name} description={product.description}>
      <Heading className="text-center">{product.name}</Heading>
      <div>
        <ProductBreadcrumbs product={product} />
        <ProductNavigation productId={product.id} />
      </div>
      <ProductCard product={product} />
    </Layout>
  );
};

export default ProductDetails;
