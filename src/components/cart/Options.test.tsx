import { render } from '../../test-helpers';

import Options from './Options';

import * as fixtures from '../../../fixtures';

const context = describe;

describe('Options', () => {
  context('without options', () => {
    it('not rendered', () => {
      const { container } = render(<Options options={[]} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('with options', () => {
    const [{ options }] = fixtures.cart.lineItems;
    it('renderd', () => {
      const { container } = render(<Options options={options} />);

      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
