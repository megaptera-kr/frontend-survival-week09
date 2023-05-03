import { render, screen, waitFor } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';

import routes from './routes';

import fixtures from '../fixtures';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render((
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    ));
  }

  context('when the current path is “/”', () => {
    it('renders the home page', async () => {
      renderRouter('/');

      await waitFor(() => {
        screen.getByText(/Hello, world!/);
      });
    });
  });

  context('when the current path is “/products”', () => {
    // TODO #1: category ID가 없을 때
    describe('without categoryId', () => {
      it('renders all products list', async () => {
        renderRouter('/products');
        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    // TODO #2: category ID가 있을 때
    describe('with categoryId', () => {
      it('renders products list by cateogryId', async () => {
        renderRouter(`/products?categoryId=${fixtures.categories[0].id}`);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });

  context('when the current path is “/products/{id}”', () => {
    // TODO #1: 상품 ID일 때
    describe('with correct productId', () => {
      it('renders the product detail page', async () => {
        renderRouter('/products/product-01');

        screen.getByText(/Loading/);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    // TODO #2: 상품 ID가 올바르지 않을 때
    describe('with incorrect productId', () => {
      it('renders "not found" message', async () => {
        renderRouter('/products/xxx');

        await waitFor(() => {
          screen.getByText(/Error/);
        });
      });
    });
  });

  context('when the current path is “/cart”', () => {
    // TODO: cart 페이지 라우팅 테스트
    it('renders cart page', async () => {
      renderRouter('/cart');

      await waitFor(() => {
        screen.getByText(/장바구니/);
      });
    });
  });
});
