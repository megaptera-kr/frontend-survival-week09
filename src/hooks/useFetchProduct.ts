// TODO: 상품 상세 정보 받아오기
import { useEffect } from 'react';
import useProductDetailStore from './useProductDetailStore';
import useProductFormStore from './useProductFormStore';

export default function useFetchProduct({ productId }:{productId:string}) {
  const [{ product, loading, error }, store] = useProductDetailStore();
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [store]);

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  return { loading, error };
}
