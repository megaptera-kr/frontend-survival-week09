import styled from "styled-components";
import { Link } from "react-router-dom";

import Product from "./Product";

import { ProductSummary } from "../../types";
import Images from "../product-detail/Images";

type ProductsProps = {
  products: ProductSummary[];
};

const Thumbnail = styled.img.attrs({
  alt: "Product Image",
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

export default function Products({ products }: ProductsProps) {
  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Thumbnail src={product.thumbnail.url} />
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 20%;
    padding: 1rem;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;
