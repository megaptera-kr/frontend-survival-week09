import ApiService from "./ApiService";

import fixtures from "../../fixtures";

const context = describe;

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test("fetchCategories", async () => {
    // 이걸 기본 모양으로 참고해서 작성해보세요.
    const categories = await apiService.fetchCategories();
    expect(categories).toHaveLength(2);
  });

  describe("fetchProducts", () => {
    context("without category ID", () => {
      it("returns products", async () => {
        const products = await apiService.fetchProducts();
        expect(products).not.toHaveLength(0);
      });
    });

    context("with category ID", () => {
      it("existed products", async () => {
        const products = await apiService.fetchProducts({
          categoryId: fixtures.categories[0].id,
        });

        expect(products).toHaveLength(1);
      });
      it("not existed products", async () => {
        const products = await apiService.fetchProducts({
          categoryId: fixtures.categories[1].id,
        });

        expect(products[0]).toBe(null);
      });
    });
  });

  describe("fetchProduct", () => {
    context("with product ID", () => {
      it("existed product", async () => {
        const product = await apiService.fetchProduct({
          productId: fixtures.products[0].id,
        });

        expect(product.id).toBe(fixtures.products[0].id);
      });
    });
  });

  describe("fetchCart", () => {
    it("mocking item", async () => {
      const products = await apiService.fetchProducts();
      expect(products).toHaveLength(1);
    });

    it("addProductToCart", async () => {
      const [product] = fixtures.products;

      await apiService.addProductToCart({
        productId: product.id,
        options: product.options.map((option) => ({
          id: option.id,
          itemId: option.items[0].id,
        })),
        quantity: 1,
      });
    });
  });
});
