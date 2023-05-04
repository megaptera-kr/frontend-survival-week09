import { render, screen, waitFor } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';

import routes from './routes';
import path from './constants/path';

import * as fixtures from '../fixtures';

const context = describe;

describe('routes', () => {
  function renderRouter(initialEntries = '/') {
    const router = createMemoryRouter(routes, { initialEntries: [initialEntries] });
    render((
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    ));
  }

  context('when the current path is “/”', () => {
    it('renders the home page', async () => {
      renderRouter();

      await waitFor(() => {
        screen.getByText(/Category #1/);
      });
    });
  });

  context('when the current path is “/products”', () => {
    const [{ id: categoryId }] = fixtures.categories;
    context('when categoryId is not present in the query', () => {
      it('render all products', async () => {
        renderRouter(path.products);

        fixtures.productSummaries.forEach(async (product) => {
          await waitFor(() => expect(screen.getByRole('heading', { level: 3, name: product.name })).toBeInTheDocument());
        });
      });
    });

    context('when categoryId is present in the query', () => {
      it('render products in categoryId', async () => {
        renderRouter(`${path.products}?categoryId=${categoryId}`);

        const [product1, product2] = fixtures.productSummaries;

        await waitFor(() => expect(screen.getByRole('heading', { level: 3, name: product1.name })).toBeInTheDocument());
        await waitFor(() => expect(screen.queryByRole('heading', { level: 3, name: product2.name })).toBeNull());
      });
    });
  });

  context('when the current path is “/products/{id}”', () => {
    const [{ id: productId }] = fixtures.products;
    context('when correct product id', () => {
      it('render product detail info', async () => {
        renderRouter(`${path.products}/${productId}`);

        await waitFor(() => {
          screen.getByText(/Category #1/);
        });
      });
    });

    context('when incorrect product id', () => {
      it('render text "존재하지 않는 상품입니다."', async () => {
        renderRouter(`${path.products}/fake${productId}`);

        await waitFor(() => expect(screen.getByText(/존재하지 않는 상품입니다./)).toBeInTheDocument());
      });
    });
  });

  context('when the current path is “/cart”', () => {
    it('render correctly', async () => {
      renderRouter(path.cart);

      expect(screen.getByRole('heading', { level: 2, name: '장바구니' }));
      await waitFor(() => expect(screen.getByText(/맨투맨/)).toBeInTheDocument());
    });
  });
});
