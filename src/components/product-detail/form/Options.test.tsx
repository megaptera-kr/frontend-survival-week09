import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Options from './Options';

import * as fixtures from '../../../../fixtures';

const [product] = fixtures.products;
const { options } = product;

const store = {
  product,
  selectedOptionItems: options.map((i) => i.items[0]),
  quantity: 1,
  changeOptionItem: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('Options', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders comboboxes', () => {
    render(<Options />);

    expect(screen.getAllByRole('combobox')).toHaveLength(options.length);
  });

  context('when selectedItem is changed', () => {
    it('changeOptionItem is called', () => {
      render(<Options />);

      fireEvent.change(screen.getByRole('combobox', { name: 'Color' }), {
        target: {
          value: 'option-item-02',
        },
      });

      expect(store.changeOptionItem).toBeCalled();
    });
  });
});
