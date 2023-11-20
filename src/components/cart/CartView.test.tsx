import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import CartView from './CartView';

import fixtures from '../../../fixtures';

const context = describe;

describe('CartView', () => {
  context('카트가 비어있을 때', () => {
    const cart = {
      lineItems: [],
      totalPrice: 0,
    };

    it('장바구니가 비었습니다 문구를 볼 수 있고 합계 문구는 볼 수 없다', () => {
      const { container } = render(<CartView cart={cart} />);

      expect(container).toHaveTextContent('장바구니가 비었습니다');
      expect(container).not.toHaveTextContent('합계');
    });
  });

  context('카트에 담긴 물건이 있을 때', () => {
    const { cart } = fixtures;

    it('제품, 단가, 수량, 금액, 합계 내용이 보인다', () => {
      render(<CartView cart={cart} />);

      screen.getByText('제품');
      screen.getByText(cart.lineItems[0].product.name);
    });
  });
});
