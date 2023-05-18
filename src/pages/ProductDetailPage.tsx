import { useParams } from 'react-router-dom';

import ProductDetailView from '../components/product-detail/ProductDetailView';

import useFetchProduct from '../hooks/useFetchProduct';

export default function ProductDetailPage() {
  const params = useParams();

  const productId = String(params.id);

  const { loading, error } = useFetchProduct({ productId });

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <div>
      <ProductDetailView />
    </div>
  );
}
