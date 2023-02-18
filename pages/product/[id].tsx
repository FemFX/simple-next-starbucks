import { products } from "@/app/data/product.data";
import { IProduct } from "@/app/types/product.interface";
import ProductDetails from "@/components/screens/product-details/ProductDetails";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export interface IProductDetails {
  product: IProduct;
}

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => {
    return {
      params: { id: String(p.id) },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
  params,
}) => {
  const product =
    products.find((p) => p.id == +params?.id!) || ({} as IProduct);
  return {
    props: {
      product,
    },
  };
};

export default ProductDetailsPage;
