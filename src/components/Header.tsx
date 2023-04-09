import { Link } from 'react-router-dom';

import styled from 'styled-components';
import useFetchCategories from '../hooks/useFetchCategories';

const Container = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    ul {
      display: flex;
    }

    li {
      margin-right: 2rem;
    }

    .active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

// TODO: 헤더에 카테고리 목록 보여주기
export default function Header() {
  const { categories } = useFetchCategories();

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
            <ul>
              {!!categories.length
            && categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/products?categoryId=${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            </ul>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
