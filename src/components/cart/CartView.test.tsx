import { screen } from "@testing-library/react";

import { render } from "../../test-helpers";

import CartView from "./CartView";

import fixtures from "../../../fixtures";
import { nullCart } from "../../types";

const context = describe;

describe("CartVidew", () => {
  context("When empty cart", () => {
    const cart = nullCart;

    it("show empty text", () => {
      render(<CartView cart={cart} />);

      screen.getByText(/비었습니다/);
    });
  });

  context("When get item", () => {
    const { cart } = fixtures;

    it("show appropriate text", () => {
      render(<CartView cart={cart} />);

      screen.getByText(cart.lineItems[0].product.name);
    });
  });
});
