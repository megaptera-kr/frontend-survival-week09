import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Option from './Option';

import * as fixtures from '../../../../fixtures';

const context = describe;

describe('Option', () => {
  const [product] = fixtures.products;
  const [option] = product.options;
  const [selectedItem] = option.items;

  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderOption() {
    render((
      <Option
        option={option}
        selectedItem={selectedItem}
        onChange={handleChange}
      />
    ));
  }

  it('renders combobox', () => {
    renderOption();

    screen.getByRole('combobox');
  });

  context('when select correct option', () => {
    const otherOptionItem = option.items[1];

    it('handleChange is called', () => {
      renderOption();

      const comboBoxEl = screen.getByRole('combobox');

      fireEvent.change(comboBoxEl, {
        target: {
          value: 'option-item-02',
        },
      });

      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledWith({
        optionId: option.id,
        optionItemId: otherOptionItem.id,
      });
    });
  });

  context('when select incorrect option', () => {
    it('handleChange is not called', () => {
      renderOption();

      const comboBoxEl = screen.getByRole('combobox');

      fireEvent.change(comboBoxEl, {
        target: {
          value: 'incorrect-alue',
        },
      });

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
