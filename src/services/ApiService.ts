import axios, { AxiosInstance } from 'axios';

import { BASE_URL } from '../constants/common';
import type {
  ProductSummary, Category, ProductDetail, Cart, AddToProductCartRequest,
} from '../types';

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 3000,
    });
  }

  async fetchProducts(categoryId?: string): Promise<ProductSummary[]> {
    const { data: { products } } = await this.instance.get<{products: ProductSummary[]}>('/products', { params: { categoryId } });
    return products;
  }

  async fetchCategories(): Promise<Category[]> {
    const { data: { categories } } = await this.instance.get<{categories: Category[]}>('/categories');
    return categories;
  }

  async fetchProduct(id: string): Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${id}`);
    return data;
  }

  async fetchCart(): Promise<Cart> {
    const { data } = await this.instance.get('/cart');
    return data;
  }

  async addProductToCart(req: AddToProductCartRequest) {
    this.instance.post('/cart/line-items', req);
  }
}

const apiService = new ApiService();

export default apiService;
