import useFetchCart from '../hooks/useFetchCart';

import CartView from '../components/cart/CartView';

// TODO: 장바구니 보여주기
export default function CartPage() {
  const { cart } = useFetchCart();
  if (!cart) {
    return null;
  }

  return (
    <div>
      <h2>장바구니</h2>
      <CartView cart={cart} />
    </div>
  );
}
