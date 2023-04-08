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

  // TODO #2: 선택이 잘못됐을 때
});
