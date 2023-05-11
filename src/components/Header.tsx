import { Link } from 'react-router-dom';

import styled from 'styled-components';

import useFetchCategories from '../hooks/useFetchCategories';
import path from '../constants/path';

const Container = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    & > div {
      display: flex;
      justify-content: space-between;
    }

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

export default function Header() {
  const { categories } = useFetchCategories();

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <div>
          <Link to={path.products}>Products</Link>
          <Link to={path.cart}>Cart</Link>
        </div>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={{ pathname: path.products, search: `?categoryId=${category.id}` }}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
