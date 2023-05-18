import { screen } from '@testing-library/react';

import { render } from '../test-helpers';

import Header from './Header';
import { Category } from '../types';

const context = describe;

let categories: Category[];

jest.mock('../hooks/useFetchCategories', () => () => ({
  categories,
}));

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('사용자가 페이지에 진입할 때', () => {
    categories = [];

    it('header 컴포넌트가 렌더링된다', () => {
      render(<Header />);

      screen.getByText('Shop');
      screen.getByText('Home');
      screen.getByText('Products');
      screen.getByText('Cart');
    });
  });

  context('카테고리가 없을 때', () => {
    it('상위 메뉴인 Products는 보이되 하위 카테고리인 outer 카테고리가 보이지 않는다', () => {
      categories = [];
      const { container } = render(<Header />);

      expect(container).toHaveTextContent('Products');
      expect(container).not.toHaveTextContent('outer');
    });
  });

  context('outer 카테고리만 있을 때', () => {
    it('outer 카테고리가 보이고 top 카테고리는 보이지 않는다.', () => {
      categories = [{ id: '1', name: 'outer' }];
      const { container } = render(<Header />);

      expect(container).toHaveTextContent('outer');
    });
  });
});
