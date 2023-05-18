import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Options from './Options';

import fixtures from '../../../../fixtures';

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

  context('옵션이 바뀌면', () => {
    it('changeOptionItem 함수가 호출되고 선택한 옵션이 화면에 나온다', () => {
      render(<Options />);

      const [option] = options;
      const [, item] = option.items;

      const [combobox] = screen.getAllByRole('combobox');

      fireEvent.change(combobox, {
        target: { value: item.id },
      });

      expect(store.changeOptionItem).toBeCalledWith({
        optionId: option.id,
        optionItemId: item.id,
      });
    });
  });
});
