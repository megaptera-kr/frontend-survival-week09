import { container } from 'tsyringe';
import { useEffectOnce } from 'usehooks-ts';
import { useStore } from 'usestore-ts';

import CategoriesStore from '../stores/CategoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);
  const [{ categories }] = useStore(store);

  useEffectOnce(() => {
    store.fetchCategories();
  });

  return { categories };
}
