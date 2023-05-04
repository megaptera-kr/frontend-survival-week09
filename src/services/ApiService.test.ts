import apiService from './ApiService';

import * as fixtures from '../../fixtures';

const context = describe;

describe('ApiService', () => {
  test('fetchCategories', async () => {
    const categories = await apiService.fetchCategories();

    expect(categories).not.toHaveLength(0);
  });

  describe('fetchProducts', () => {
    context('without categoryId params', () => {
      it('fetching all products', async () => {
        const products = await apiService.fetchProducts();

        expect(products).toHaveLength(2);
        expect(products).toEqual(fixtures.productSummaries);
      });
    });

    context('with categoryId params', () => {
      it('fetching all products', async () => {
        const [{ id: categoryId }] = fixtures.categories;
        const products = await apiService.fetchProducts(categoryId);

        expect(products).toHaveLength(1);
        expect(products).toEqual([fixtures.productSummaries[0]]);
      });
    });
  });

  test('fetchProduct', async () => {
    const [fakeProduct] = fixtures.products;
    const product = await apiService.fetchProduct(fakeProduct.id);

    expect(product).toEqual(fakeProduct);
  });

  test('fetchCart', async () => {
    const fakeCart = fixtures.cart;
    const cart = await apiService.fetchCart();

    expect(cart).toEqual(fakeCart);
  });

  test('addProductToCart', async () => {
    const reqData = {
      productId: 'test',
      options: [{ id: 'test', itemId: 'test' }],
      quantity: 1,
    };
    const data = await apiService.addProductToCart(reqData);
    // ?? 뭘 테스트하는거지
    expect(data).toBeUndefined();
  });
});
