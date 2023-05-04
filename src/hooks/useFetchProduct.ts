import { useEffect } from 'react';

import useProductDetailStore from './useProductDetailStore';

export default function useFetchProduct(id: string) {
  const [{ product, error }, store] = useProductDetailStore();

  useEffect(() => {
    store.fetchProduct(id);
  }, [id]);

  return { product, error };
}
