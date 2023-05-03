// TODO: 장바구니 받아오기
import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';
import { useEffect } from 'react';
import CartStore from '../stores/CartStore';

export default function useFetchCart() {
  const store = container.resolve(CartStore);

  const [{ cart }] = useStore(store);

  useEffect(() => {
    store.fetchCart();
  }, [store]);

  return { cart };
}
