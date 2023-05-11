import { screen, fireEvent, waitFor } from "@testing-library/react";

import { render } from "../../../test-helpers";

import Options from "./Options";

import fixtures from "../../../../fixtures";

const [product] = fixtures.products;
const { options } = product;

const store = {
  productId: product.id,
  options: options,
  selectedOptionItems: options.map((i) => i.items[0]),
  quantity: 1,
  changeOptionItem: jest.fn(),
};

jest.mock("../../../hooks/useProductFormStore", () => () => [store, store]);

const context = describe;

describe("Options", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders comboboxes", () => {
    render(<Options />);

    expect(screen.getAllByRole("combobox")).toHaveLength(options.length);
  });

  it("change opttion item", () => {
    render(<Options />);

    const [option] = options;
    const [, item] = option.items;

    const [combobox] = screen.getAllByRole("combobox");

    fireEvent.change(combobox, {
      target: { value: item.id },
    });

    expect(store.changeOptionItem).toBeCalledWith({
      optionId: option.id,
      optionItemId: item.id,
    });
  });
});
