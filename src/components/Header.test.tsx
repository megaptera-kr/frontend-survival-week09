import { screen } from "@testing-library/react";

import { render } from "../test-helpers";
import Header from "./Header";

const context = describe;

describe("Header.test", () => {
  context("render Header", () => {
    render(<Header />);

    it("show Shop", async () => {
      screen.getByText("Shop");
      screen.getByRole("link", { name: "Home" });
    });
  });
});
