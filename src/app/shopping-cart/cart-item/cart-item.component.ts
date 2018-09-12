import { Component, OnInit, Input } from '@angular/core';
import { IShirt } from '../../shirt/ishirt';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { MessageService } from '../../services/message.service';
import { Constants } from '../../constants';
import { ICart } from '../../shopping-cart/icart';
import { Cart } from '../../shopping-cart/cart';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() public entity: IShirt;

  button_title = "Delete"
  cart:ICart;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService
    , private messageService: MessageService) { }

  ngOnInit() {

  }

  deleteCartItem(shirt: IShirt){
    this.cart = (new Cart()).init((this.storage.get(Constants.SHOPPING_CART_KEY) as ICart).items);
    this.cart.deleteItem(shirt);
    this.messageService.sendMessage(Constants.MSG_CART_UPDATED);
  }

  increaseCount(shirt:IShirt){
    this.cart = (new Cart()).init((this.storage.get(Constants.SHOPPING_CART_KEY) as ICart).items);
    this.cart.deleteItem(shirt);
    this.messageService.sendMessage(Constants.MSG_CART_UPDATED);
  }

  decreaseCount(shirt:IShirt){
    this.cart = (new Cart()).init((this.storage.get(Constants.SHOPPING_CART_KEY) as ICart).items);
    this.cart.deleteItem(shirt);
    this.messageService.sendMessage(Constants.MSG_CART_UPDATED);
  }
}