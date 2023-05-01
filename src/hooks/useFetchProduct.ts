import { useEffect } from "react";
import useProductDetailStore from "./useProductDetailStore";

export default function useFetchProduct({ productId }: { productId: string }): {
  loading: boolean;
  error: boolean;
} {
  const [{ loading, error }, store] = useProductDetailStore();

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [store]);

  return {
    loading,
    error,
  };
}
