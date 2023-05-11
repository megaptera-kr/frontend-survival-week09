import styled from 'styled-components';

import numberFormat from '../../utils/numberFormat';
import type { ProductSummary } from '../../types';

const Container = styled.article`
  aspect-ratio: 1/1.5;

  & > img {
    width: 100%;
    aspect-ratio: 1/1;
    margin-bottom: 10px;
  }

  & > h3 {
    margin-bottom: 6px;
  }
`;

const Desc = styled.dl`
  display: flex;
  justify-content: space-between;
`;

export interface ProductProps {
  product: ProductSummary;
}

export default function Product({ product }: ProductProps) {
  return (
    <Container>
      <img src={product.thumbnail.url} alt="" />
      <h3>{product.name}</h3>
      <Desc>
        <dt>Price</dt>
        <dd>{numberFormat(product.price)}</dd>
      </Desc>
    </Container>
  );
}
