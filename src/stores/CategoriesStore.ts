import { singleton } from "tsyringe";
import { Action, Store } from "usestore-ts";
import { Category } from "../types";
import { apiService } from "../services/ApiService";

@singleton()
@Store()
export default class CategoriesStore {
  categories: Category[] = [];

  async fetchCategories() {
    this.setCategories([]);

    const categories = await apiService.fetchCategories();

    this.setCategories(categories);
  }

  @Action()
  setCategories(categories: Category[]) {
    this.categories = categories;
  }
}
