// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import * as fixtures from '../../fixtures';
import { BASE_URL } from '../constants/common';

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => (
    res(ctx.json({ categories: fixtures.categories }))
  )),
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const categoryId = req.url.searchParams.get('categoryId');

    if (categoryId) {
      return res(ctx.json(
        {
          products: fixtures.productSummaries.filter(
            (product) => product.category.id === categoryId as string,
          ),
        },
      ));
    }
    return res(ctx.json({ products: fixtures.productSummaries }));
  }),
  rest.get(`${BASE_URL}/products/:id`, (req, res, ctx) => {
    const product = fixtures.products.find((i) => i.id === req.params.id);
    if (!product) {
      return res(ctx.status(404));
    }
    return res(ctx.json(product));
  }),
  rest.get(`${BASE_URL}/cart`, (req, res, ctx) => (
    res(ctx.json(fixtures.cart))
  )),
  rest.post(`${BASE_URL}/cart/line-items`, (req, res, ctx) => (
    res(ctx.status(201))
  )),
];

export default handlers;
