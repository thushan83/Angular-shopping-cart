import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ShirtItemComponent } from './shirt/shirt-item/shirt-item.component';
import { ShirtItemsComponent } from './shirt/shirt-items/shirt-items.component';
import { ShirtService } from './shirt/shirt.service';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { MasterContainerComponent } from './master-container/master-container/master-container.component';
import { HeaderContainerComponent } from './header-container/header-container/header-container.component';
import { ShirtItemDetailsComponent } from './shirt/shirt-item-details/shirt-item-details.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { MessageService } from './services/message.service';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { CartItemsComponent } from './shopping-cart/cart-items/cart-items.component';
import { SimpleModalModule } from 'ngx-simple-modal';

const appRoutes: Routes = [
  { path: '',      component: ShirtItemsComponent },
  { path: 'products',      component: ShirtItemsComponent },
  { path: 'details',      component: ShirtItemDetailsComponent }
]


@NgModule({
  declarations: [
    ShirtItemComponent,
    ShirtItemsComponent,
    ShoppingCartComponent,
    MasterContainerComponent,
    HeaderContainerComponent,
    ShirtItemDetailsComponent,
    CartItemComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StorageServiceModule,
    SimpleModalModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [
        CartItemsComponent
  ],
  providers: [ShirtService, MessageService],
  bootstrap: [MasterContainerComponent]
})
export class AppModule { }
