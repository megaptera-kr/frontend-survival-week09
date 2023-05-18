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
        screen.getByText(/Category #1/);
      });
    });
  });

  context('when the current path is “/products”', () => {
    context('카테고리 아이디가 없을 때', () => {
      it('ProductListPage가 렌더된다', async () => {
        renderRouter('/products');

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('카테고리 아이디가 있을 때', () => {
      it('ProductListPage가 렌더된다', async () => {
        renderRouter(`/products?categoryId=${fixtures.categories[0].id}`);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });

  context('when the current path is “/products/{id}”', () => {
    context('상품 ID일 때', () => {
      it('상품 디테일 페이지가 렌더된다', async () => {
        renderRouter(`/products/${fixtures.products[0].id}`);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('상품 ID가 올바르지 않을 때', () => {
      it('에러메시지가 보인다', async () => {
        renderRouter('/products/xxx');

        await waitFor(() => {
          screen.getByText(/Error/);
        });
      });
    });
  });

  context('when the current path is “/cart”', () => {
    it('카트 페이지를 렌더한다', async () => {
      renderRouter('/cart');

      await waitFor(() => {
        screen.getByText(/합계/);
      });
    });
  });
});
