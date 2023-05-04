import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useEffect } from 'react';
import useFetchProduct from '../../hooks/useFetchProduct';
import Images from './Images';
import Description from './Description';
import AddToCartForm from './form/AddToCartForm';
import useProductFormStore from '../../hooks/useProductFormStore';

const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(40%, 550px) 1fr;
  column-gap: 50px;
  justify-content: space-between;;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;;
`;
const InfoBox = styled.div`
  & > h2 {
    margin-bottom: 15px;
    font-size: 3.5rem;
  }
`;

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, error } = useFetchProduct(id as string);
  const [, productFormStore] = useProductFormStore();

  const handleGoBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  if (error) {
    return (
      <>
        <span>Error!</span>
        <h2>존재하지 않는 상품입니다.</h2>
        <button type="button" onClick={handleGoBackBtn}>뒤로 가기</button>
      </>
    );
  }

  return (
    <Container>
      <Images images={product.images} />
      <DetailBox>
        <InfoBox>
          <h2>{product.name}</h2>
          <Description value={product.description} />
        </InfoBox>
        <AddToCartForm />
      </DetailBox>
    </Container>
  );
}
