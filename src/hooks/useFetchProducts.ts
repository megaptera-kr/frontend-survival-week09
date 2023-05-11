import ProductsStore from "../stores/ProductsStore";
import { container } from "tsyringe";
import { useEffect } from "react";
import { useStore } from "usestore-ts";

export default function useFetchProducts({
  categoryId,
}: {
  categoryId?: string;
}) {
  const store = container.resolve(ProductsStore);
  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [store, categoryId]);

  return {
    products,
  };
}
