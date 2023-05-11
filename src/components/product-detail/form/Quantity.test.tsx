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

  context('with "+" button is clicked', () => {
    it('couchangeQuantity is called', async () => {
      render(<Quantity />);

      fireEvent.click(screen.getByRole('button', { name: 'increase' }));

      expect(store.changeQuantity).toHaveBeenCalledWith(8);
    });
  });

  context('with "-" button is clicked', () => {
    it('changeQuantity is called', () => {
      render(<Quantity />);

      const button = screen.getByRole('button', { name: 'decrease' });

      fireEvent.click(button);

      expect(store.changeQuantity).toHaveBeenCalledWith(6);
    });
  });
});
