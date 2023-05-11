import { container } from "tsyringe";
import CategoriesStore from "../stores/CategoriesStore";
import { useEffect } from "react";
import { useStore } from "usestore-ts";

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);
  const [{ categories }] = useStore(store);

  useEffect(() => {
    store.fetchCategories();
  }, [store]);

  return {
    categories,
  };
}
