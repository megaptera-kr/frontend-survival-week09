import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

import apiService from '../services/ApiService';
import { Cart, nullCart } from '../types';

@singleton()
@Store()
export default class CartStore {
  cart: Cart = nullCart;

  async fetchCart() {
    const data = await apiService.fetchCart();

    this.setCart(data);
  }

  @Action()
  private setCart(cart: Cart) {
    this.cart = cart;
  }
}
