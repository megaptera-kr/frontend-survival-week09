import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Product from './Product';
import useFetchProducts from '../../hooks/useFetchProducts';

const Container = styled.section`
  & > h2 {
    margin-bottom: 20px;
  }
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

export default function Products() {
  const [params] = useSearchParams();

  const { products } = useFetchProducts(params.get('categoryId') ?? '');

  return (
    <Container>
      <h2>상품 목록 페이지</h2>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}
