import { IProduct } from "@/app/types/product.interface";

export interface ICarouselItem {
  isActive: boolean;
  selectItem: () => void;
  product: IProduct;
}
