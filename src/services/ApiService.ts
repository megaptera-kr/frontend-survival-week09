import axios from 'axios';

import { ProductSummary } from '../types';

const API_BASE_URL = process.env.API_BASE_URL || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  // TODO #1: fetchProducts
  async fetchProducts({ categoryId }:{
    categoryId?: string;
  } = {}): Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: {
        categoryId,
      },
    });
    const { products } = data;
    return products;
  }
  // TODO #2: fetchCategories
  // TODO #3: fetchProduct
  // TODO #4: fetchCart
  // TODO #5: addProductToCart
}

export const apiService = new ApiService();
