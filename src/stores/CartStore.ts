import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { apiService } from '../services/ApiService';

import { Cart } from '../types';

// TODO: 장바구니를 관리하는 Store
@singleton()
@Store()
export default class CartStore {
  cart: Cart | null = null;

  async fetchCart() {
    this.setCart(null);

    const cart = await apiService.fetchCart();

    this.setCart(cart);
  }

  @Action()
  setCart(cart: Cart | null) {
    this.cart = cart;
  }
}
