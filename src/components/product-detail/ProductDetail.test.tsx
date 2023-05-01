import { screen } from "@testing-library/react";

import { render } from "../../test-helpers";

import ProductDetail from "./ProductDetail";

import fixtures from "../../../fixtures";
import { container } from "tsyringe";
import ProductDetailStore from "../../stores/ProductDetailStore";

const [product] = fixtures.products;

test("ProductDetail", async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProduct({ productId: product.id });

  render(<ProductDetail />);

  screen.getByText(product.name);
});
