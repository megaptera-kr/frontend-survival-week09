import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import CartView from './CartView';

import * as fixtures from '../../../fixtures';

const context = describe;

describe('CartView', () => {
  context('when the cart is empty', () => {
    const emptyCart = {
      lineItems: [],
      totalPrice: 0,
    };
    it('render text "장바구니가 비었습니다"', () => {
      render(<CartView cart={emptyCart} />);

      expect(screen.getByText(/장바구니가 비었습니다/)).toBeInTheDocument();
    });
  });

  context('when the cart is not empty', () => {
    it('render items', () => {
      render(<CartView cart={fixtures.cart} />);

      fixtures.cart.lineItems.forEach((item) => {
        expect(screen.getByText(item.product.name)).toBeInTheDocument();
        expect(screen.getByText(item.quantity)).toBeInTheDocument();
      });
    });
  });
});
