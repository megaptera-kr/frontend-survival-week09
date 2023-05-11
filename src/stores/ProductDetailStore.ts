import { isAxiosError } from 'axios';
import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

import apiService from '../services/ApiService';
import { ProductDetail, nullProductDetail } from '../types';

type ErrorCase = 'notFound' | 'other~';
@singleton()
@Store()
export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  error: ErrorCase | null = null;

  async fetchProduct(id: string) {
    try {
      this.resetError();
      const product = await apiService.fetchProduct(id);

      this.setProduct(product);
    } catch (error) {
      if (isAxiosError(error)) {
        const errResponse = error.response;
        if (errResponse?.status === 404) {
          this.setError('notFound');
        }
      }
    }
  }

  @Action()
  private setProduct(product: ProductDetail) {
    this.product = product;
  }

  @Action()
  private setError(error: ErrorCase) {
    this.error = error;
  }

  private resetError() {
    this.error = null;
  }
}
