import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';

import { useEffect } from 'react';
import ProductStore from '../stores/ProductsStore';

export default function useFetchProducts(categoryId?: string) {
  const store = container.resolve(ProductStore);

  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts(categoryId);
  }, [store, categoryId]);

  return { products };
}
