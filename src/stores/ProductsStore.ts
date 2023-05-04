import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

import apiService from '../services/ApiService';
import type { ProductSummary } from '../types';

@singleton()
@Store()
export default class ProductStore {
  products: ProductSummary[] = [];

  async fetchProducts(categoryId?: string) {
    const products = await apiService.fetchProducts(categoryId);

    this.setProducts(products);
  }

  @Action()
  private setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}
