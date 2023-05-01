import numberFormat from "./numberFormat";

test("numberFormat", () => {
  expect(numberFormat(1)).toBe("1");
  expect(numberFormat(100999)).toBe("100,999");
});
