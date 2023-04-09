// TODO: 강의에서 나온 방법 중 하나를 택하여 테스트 코드 작성
import { container } from 'tsyringe';

import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import ProductDetail from './ProductDetail';

import ProductDetailStore from '../../stores/ProductDetailStore';

import fixtures from '../../../fixtures';

const [product] = fixtures.products;

test('ProductDetail', async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProduct({ productId: product.id });

  render(<ProductDetail />);

  screen.getByText(product.name);
});
