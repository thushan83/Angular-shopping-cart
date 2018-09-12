import { Component, OnInit, Output } from '@angular/core';
import { IShirt } from '../ishirt';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { Constants } from '../../constants';
import { MessageService } from '../../services/message.service';
import { ICart } from '../../shopping-cart/icart';
import { Cart } from '../../shopping-cart/cart';

@Component({
  selector: 'app-shirt-item-details',
  templateUrl: './shirt-item-details.component.html',
  styleUrls: ['./shirt-item-details.component.css']
})
export class ShirtItemDetailsComponent implements OnInit {

  shirt : IShirt;
  button_title = "Add to cart";
  private cart: ICart;


  constructor( @Inject(LOCAL_STORAGE) private storage: StorageService
    , private messageService: MessageService) { }

  ngOnInit() {
    this.shirt = this.storage.get(Constants.SELECTED_SHIRT_KEY)
    this.updateButtonCaption();
  }

  addToCart(){
    this.cart = (new Cart()).init((this.storage.get(Constants.SHOPPING_CART_KEY) as ICart).items);
    this.cart.addNewItem(this.shirt);
    this.storage.set(Constants.SHOPPING_CART_KEY, this.cart);
    this.messageService.sendMessage({event:Constants.MSG_CART_UPDATED, data:""});
    this.updateButtonCaption();
  }

  private updateButtonCaption(){
    this.cart = (new Cart()).init((this.storage.get(Constants.SHOPPING_CART_KEY) as ICart).items);
    if(this.cart != null){
      if(this.cart.hasItem(this.shirt)){
        this.button_title = "Add one more";
      }
    }
  }
}
