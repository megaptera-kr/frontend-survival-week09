import ApiService from './ApiService';

import fixtures from '../../fixtures';

const context = describe;

describe('ApiService', () => {
  // TODO: 테스트 대상 생성
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test('fetchCategories', async () => {
    // 이걸 기본 모양으로 참고해서 작성해보세요.
    const categories = await apiService.fetchCategories();
    expect(categories).not.toHaveLength(0);
  });

  describe('fetchProducts', () => {
    // TODO #1: category ID가 없을 때
    context('without category ID', () => {
      it('returns products', async () => {
        const products = await apiService.fetchProducts();
        expect(products).not.toHaveLength(0);
      });
    });

    // TODO #2: category ID가 있을 때
    context('with category ID', () => {
      it('returns products', async () => {
        const products = await apiService.fetchProducts({
          categoryId: fixtures.categories[0].id,
        });
        expect(products).not.toHaveLength(0);
      });
    });
  });

  test('fetchProduct', async () => {
    // TODO: fetchProduct 테스트
    const product = await apiService.fetchProduct({
      productId: fixtures.products[0].id,
    });
    expect(product.name).toBe(fixtures.products[0].name);
  });

  test('fetchCart', async () => {
    // TODO: fetchCart 테스트
    const cart = await apiService.fetchCart();
    expect(cart.lineItems).not.toHaveLength(0);
  });

  test('addProductToCart', async () => {
    // TODO: addProductToCart 테스트
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
