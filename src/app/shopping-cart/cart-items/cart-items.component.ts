import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { MessageService } from '../../services/message.service';
import { IShirt } from '../../shirt/ishirt';
import { Constants } from '../../constants';
import { ICart } from '../../shopping-cart/icart';
import { Cart } from '../../shopping-cart/cart';
import { SimpleModalComponent } from "ngx-simple-modal";
import { CartCalculator } from '../cart-calculator';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent  extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {

  title: string;
  message: string;
  cart_items:IShirt[];
  calculator: CartCalculator;
  subtotal: string;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    super();
    var cart = this.storage.get(Constants.SHOPPING_CART_KEY);
    if(cart != null){
      cart = (new Cart()).init(cart.items);
      this.cart_items = cart.items;
      this.calculator = new CartCalculator();
      this.subtotal = this.calculator.calculateCartSubTotal(cart.items).toString();
    }
  }

  ngOnInit() {

  }
}
