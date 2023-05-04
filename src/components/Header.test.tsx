import { screen, waitFor } from '@testing-library/react';

import { render } from '../test-helpers';
import Header from './Header';
import { categories } from '../../fixtures';

jest.mock('../hooks/useFetchCategories', () => () => ({ categories }));

describe('Header', () => {
  function renderHeader() {
    return render(<Header />);
  }

  it('render correctly', async () => {
    renderHeader();

    expect(screen.getByRole('heading', { level: 1, name: 'Shop' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Products' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Cart' })).toBeInTheDocument();
  });

  it('render categories', async () => {
    renderHeader();

    categories.forEach(async (ctg) => {
      await waitFor(() => expect(screen.getByRole('link', { name: ctg.name })).toBeInTheDocument());
    });
  });
});
