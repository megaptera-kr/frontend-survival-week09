import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';
import ProductDetail from './ProductDetail';
import { products } from '../../../fixtures';

const [product] = products;

jest.mock('../../hooks/useFetchProduct', () => () => ({ product }));

describe('Product Detail', () => {
  function renderProductDetail() {
    return render(<ProductDetail />);
  }

  it('render correctly', async () => {
    renderProductDetail();

    expect(screen.getByRole('heading', { level: 2, name: product.name })).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', product.images[0].url);
  });
});
