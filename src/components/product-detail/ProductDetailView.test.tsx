import { container } from 'tsyringe';

import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import ProductDetailView from './ProductDetailView';

import ProductDetailStore from '../../stores/ProductDetailStore';

import fixtures from '../../../fixtures';

const [product] = fixtures.products;
test('ProductDetailView', async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProduct({ productId: product.id });

  render(<ProductDetailView />);

  screen.getByText(product.name);
});
