import styled from "styled-components";

import useProductDetailStore from "../../hooks/useProductDetailStore";
import Images from "./Images";
import Description from "./Description";
import AddToCartForm from "./form/AddToCartForm";
import useProductFormStore from "../../hooks/useProductFormStore";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;
  }
`;

export default function ProductDetail() {
  const [{ product }] = useProductDetailStore();
  const [, store] = useProductFormStore();

  useEffect(() => {
    store.setProduct(product);
  }, [product]);

  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        <Description value={product.description} />
        <AddToCartForm />
      </article>
    </Container>
  );
}
