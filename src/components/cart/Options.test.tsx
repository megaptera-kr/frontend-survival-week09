import { render } from '../../test-helpers';

import Options from './Options';

import { OrderOption } from '../../types';

import fixtures from '../../../fixtures';

const context = describe;

describe('Options', () => {
  context('옵션이 없을 때', () => {
    const options: OrderOption[] = [];

    it('렌더되는 내용이 없다', () => {
      const { container } = render(<Options options={options} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('옵션이 있으면', () => {
    const [lineItem] = fixtures.cart.lineItems;
    const { options } = lineItem;

    it('옵션이 렌더된다', () => {
      const { container } = render(<Options options={options} />);

      const optionName = options[0].name;
      const itemName = options[0].item.name;

      expect(container).toHaveTextContent(`${optionName}: ${itemName}`);
    });
  });
});
