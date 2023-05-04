import Layout from './components/Layout';
import path from './constants/path';

import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: path.root, element: <HomePage /> },
      { path: path.products, element: <ProductListPage /> },
      { path: `${path.products}/:id`, element: <ProductDetailPage /> },
      { path: path.cart, element: <CartPage /> },
    ],
  },
];

export default routes;
