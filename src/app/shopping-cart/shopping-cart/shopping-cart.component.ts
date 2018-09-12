import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { Constants } from '../../constants';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { Cart } from '../cart';
import { ICart } from '../icart';
import { SimpleModalService } from "ngx-simple-modal";
import { CartItemsComponent } from '../cart-items/cart-items.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  item_count = 0;
  subscription: Subscription;
  cart: Cart;

  constructor(private messageService: MessageService,
      @Inject(LOCAL_STORAGE) private storage: StorageService,
      private simpleModalService:SimpleModalService) {
  }

  ngOnInit() {
    this.cartInit();
    this.item_count = this.getCartCount();
    this.subscription = this.messageService.getMessage()
    .subscribe(message => {

      if (message.text == Constants.MSG_CART_UPDATED){

           this.item_count = this.getCartCount();
      }
    });
  }

  ngOnDestroy() {
     // unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
  }

  private cartInit():void{
    let obj = this.storage.get(Constants.SHOPPING_CART_KEY);
    if(obj == null){
        this.storage.set(Constants.SHOPPING_CART_KEY,new Cart());
    }
    this.cart = this.storage.get(Constants.SHOPPING_CART_KEY);

  }

  private getCartCount():number{
    this.cart = this.storage.get(Constants.SHOPPING_CART_KEY);
    if(this.cart != null){
      this.cart = (new Cart()).init(this.cart.items);
      return this.cart.getItemCount();
    }else{
      return 0;
    }
  }

  private openCartDialog(){
    let disposable = this.simpleModalService.addModal(CartItemsComponent, {
                title: 'Shopping Cart',
                message: ''
              })
              .subscribe((isConfirmed)=>{

              });
  }
}
