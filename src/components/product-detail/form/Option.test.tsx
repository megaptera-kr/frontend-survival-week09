import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Option from './Option';

import fixtures from '../../../../fixtures';

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

  // TODO #1: 선택이 바뀌었을 때
  context('when selection is changed', () => {
    it('calls “onChange” callback', () => {
      renderOption();

      const [, item] = option.items;

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: item.id },
      });

      expect(handleChange).toBeCalledWith({
        optionId: option.id,
        optionItemId: item.id,
      });
    });
  });

  // TODO #2: 선택이 잘못됐을 때
  context('when selection is incorrect', () => {
    it("doesn't call “onChange” callback", () => {
      renderOption();

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'xxx' },
      });

      expect(handleChange).not.toBeCalled();
    });
  });
});
