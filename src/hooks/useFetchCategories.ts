// TODO: 카테고리 목록 받아오기
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffect } from 'react';
import CategoriesStore from '../stores/CategoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);

  useEffect(() => {
    store.fetchCategories();
  }, [store]);

  return { categories };
}
