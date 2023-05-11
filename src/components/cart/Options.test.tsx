import { render } from "../../test-helpers";

import Options from "./Options";

import { OrderOption } from "../../types";

import fixtures from "../../../fixtures";

const context = describe;

describe("Options", () => {
  context("Without option", () => {
    const options: OrderOption[] = [];

    it("renders nothing", () => {
      const { container } = render(<Options options={options} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context("With option", () => {
    const [lineItem] = fixtures.cart.lineItems;
    const { options } = lineItem;

    it("renders options", () => {
      const { container } = render(<Options options={options} />);

      const optionName = options[0].name;
      const itemName = options[0].item.name;

      expect(container).toHaveTextContent(`${optionName}: ${itemName}`);
    });
  });
});
