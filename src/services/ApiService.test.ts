import ApiService from './ApiService';

import fixtures from '../../fixtures';

const context = describe;

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test('fetchCategories', async () => {
    const categories = await apiService.fetchCategories();
    expect(categories).not.toHaveLength(0);
  });

  describe('fetchProducts', () => {
    context('category ID가 없을 때', () => {
      it('모든 Products를 볼 수 있다', async () => {
        const products = await apiService.fetchProducts();

        expect(products).not.toHaveLength(0);
      });
    });

    context('category ID가 있을 때', () => {
      const categoryId = fixtures.categories[0].id;

      it('products를 리턴한다', async () => {
        const products = await apiService.fetchProducts({ categoryId });

        expect(products).not.toHaveLength(0);
      });
    });
  });

  test('fetchProduct', async () => {
    const product = await apiService.fetchProduct({ productId: fixtures.products[0].id });

    expect(product.name).toBe(fixtures.products[0].name);
  });

  test('fetchCart', async () => {
    const cart = await apiService.fetchCart();

    expect(cart.lineItems).not.toHaveLength(0);
  });

  test('addProductToCart', async () => {
    const pickedProduct = fixtures.products[0];

    await apiService.addProductToCart({
      productId: pickedProduct.id,
      options: [{
        id: pickedProduct.options[0].id,
        itemId: pickedProduct.options[0].items[0].id,
      }],
      quantity: 1,
    });
  });
});
