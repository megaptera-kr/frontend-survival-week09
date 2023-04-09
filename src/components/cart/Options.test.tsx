import { render } from '../../test-helpers';

import Options from './Options';

import { OrderOption } from '../../types';

import fixtures from '../../../fixtures';

const context = describe;

describe('Options', () => {
  // TODO #1: option이 없을 때
  context('when options is empty', () => {
    const options: OrderOption[] = [];

    it('renders nothing', () => {
      const { container } = render(<Options options={options} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  // TODO #2: option이 있을 때
  context('when options is not empty', () => {
    const [lineItem] = fixtures.cart.lineItems;
    const { options } = lineItem;

    it('renders options text', () => {
      const { container } = render(<Options options={options} />);

      const optionName = options[0].name;
      const itemName = options[0].item.name;

      expect(container).toHaveTextContent(`${optionName}: ${itemName}`);
    });
  });
});
