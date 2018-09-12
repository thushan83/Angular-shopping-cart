import { IShirt } from '../shirt/ishirt';

export class CartCalculator {

     public calculateItemTotal(item:IShirt):number{
        return item.price * item.count
     }

     public calculateCartSubTotal(items:IShirt[]):number{
        var subTotal = 0;
        for(let item of items){
          subTotal = subTotal + this.calculateItemTotal(item);
        }
        return subTotal
     }
}
