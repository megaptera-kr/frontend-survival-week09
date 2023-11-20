import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

import { apiService } from '../services/ApiService';

import { ProductDetail, nullProductDetail } from '../types';

@singleton()
@Store()
export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  loading = true;

  error = false;

  @Action()
  async fetchProduct({ productId }: {
    productId: string;
  }) {
    this.startLoading();

    try {
      const product = await apiService.fetchProduct({ productId });
      this.setProduct(product);
    } catch {
      this.setError();
    }
  }

  @Action()
  startLoading() {
    this.product = nullProductDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  setProduct(product: ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  setError() {
    this.product = nullProductDetail;
    this.loading = false;
    this.error = true;
  }
}
