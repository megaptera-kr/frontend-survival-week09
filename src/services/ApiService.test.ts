import ApiService from './ApiService';

import fixtures from '../../fixtures';

const context = describe;

describe('ApiService', () => {
  // TODO: 테스트 대상 생성

  test('fetchCategories', async () => {
    // 이걸 기본 모양으로 참고해서 작성해보세요.
    // const categories = await apiService.fetchCategories();
    // expect(categories).not.toHaveLength(0);
  });

  describe('fetchProducts', () => {
    // TODO #1: category ID가 없을 때

    // TODO #2: category ID가 있을 때
  });

  test('fetchProduct', async () => {
    // TODO: fetchProduct 테스트
  });

  test('fetchCart', async () => {
    // TODO: fetchCart 테스트
  });

  test('addProductToCart', async () => {
    // TODO: addProductToCart 테스트
  });
});
