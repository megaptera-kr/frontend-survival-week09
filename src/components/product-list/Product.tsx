import { ProductSummary } from "../../types";
import numberFormat from "../../utils/numberFormat";
import Images from "../product-detail/Images";

export default function Product({ product }: { product: ProductSummary }) {
  return (
    <div>
      {/* <Images /> */}
      <div>{product.name}</div>
      <div>{numberFormat(product.price)}원</div>
    </div>
  );
}
