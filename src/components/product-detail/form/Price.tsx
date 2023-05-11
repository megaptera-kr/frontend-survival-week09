import styled from "styled-components";

import useProductFormStore from "../../../hooks/useProductFormStore";

import numberFormat from "../../../utils/numberFormat";
import useProductDetailStore from "../../../hooks/useProductDetailStore";

const Container = styled.div`
  margin-block: 0.8rem;
  font-weight: bold;
`;

export default function Price() {
  const [{ product }] = useProductDetailStore();
  const [{ quantity }] = useProductFormStore();

  return <Container>{numberFormat(product.price * quantity)}원</Container>;
}
