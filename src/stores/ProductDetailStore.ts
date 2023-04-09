import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';
import { apiService } from '../services/ApiService';

import { nullProductDetail, ProductDetail } from '../types';

// TODO: 상품 상세 정보를 관리하는 Store
@singleton()
@Store()

export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  loading = true;

  error = false;

  async fetchProduct({ productId }:{
    productId:string;
  }) {
    this.startLoading();

    try {
      const product = await apiService.fetchProduct({ productId });
      this.setProduct(product);
    } catch (error) {
      this.setError();
    }
  }

  @Action()
  private startLoading() {
    this.product = nullProductDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  private setProduct(product:ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  private setError() {
    this.product = nullProductDetail;
    this.loading = false;
    this.error = true;
  }
}
