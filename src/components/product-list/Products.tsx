import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Product from './Product';

import { ProductSummary } from '../../types';

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: block;
    padding: 1rem;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

type ProductsProps = {
  products: ProductSummary[];
}

export default function Products({ products }:ProductsProps) {
  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
