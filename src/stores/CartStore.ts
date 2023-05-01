import { singleton } from "tsyringe";
import { Action, Store } from "usestore-ts";
import { Cart, nullCart } from "../types";
import { apiService } from "../services/ApiService";

@singleton()
@Store()
export default class CartStore {
  cart: Cart = nullCart;

  async fetchCart() {
    this.setCart(nullCart);

    const cart = await apiService.fetchCart();

    this.setCart(cart);
  }

  @Action()
  setCart(cart: Cart) {
    this.cart = cart;
  }
}
