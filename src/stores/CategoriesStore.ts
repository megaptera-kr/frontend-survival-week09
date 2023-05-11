import { Store, Action } from 'usestore-ts';
import { singleton } from 'tsyringe';

import apiService from '../services/ApiService';
import type { Category } from '../types';

@singleton()
@Store()
export default class CategoriesStore {
  categories: Category[] = [];

  async fetchCategories() {
    const categories = await apiService.fetchCategories();

    this.setCategories(categories);
  }

  @Action()
  private setCategories(categories: Category[]) {
    this.categories = categories;
  }
}
