import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Quantity from './Quantity';

const store = {
  quantity: 7,
  changeQuantity: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('Quantity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders quantity', () => {
    render(<Quantity />);

    expect(screen.getByRole('textbox')).toHaveValue('7');
  });

  context('+ 버튼이 눌렸을 때', () => {
    it('수량이 + 버튼을 누른 만큼 올라간다', () => {
      render(<Quantity />);

      fireEvent.click(screen.getByRole('button', { name: '+' }));

      expect(store.changeQuantity).toBeCalledWith(7 + 1);
    });
  });

  context('- 버튼이 눌렸을 때', () => {
    it('수량이 - 버튼을 누른 만큼 내려간다', () => {
      render(<Quantity />);

      fireEvent.click(screen.getByRole('button', { name: '-' }));

      expect(store.changeQuantity).toBeCalledWith(7 - 1);
    });
  });
});
