import { ICart } from './icart'
import { IShirt } from '../shirt/ishirt';
import { CartCalculator } from './cart-calculator';

export class Cart implements ICart {
   items: IShirt[];
   calculator:CartCalculator;

   constructor(){
     this.items = [];
     this.calculator = new CartCalculator();
   }

   public init(items:IShirt[]): Cart{
     this.items = items;
     return this;
   }

   public getItemCount() : number{
      var count = 0;
      this.items.forEach((elem) =>{
          count = count + elem.count;
      });
      return count;
   }

   public addNewItem(shirt: IShirt){
     var matches = this.items.filter((element, index, array) => {
         if(element.id === shirt.id){
           element.count++;
           element.total = this.calculator.calculateItemTotal(element);
           return element;
         }
     });

     if(matches.length < 1){
       shirt.count = 1;
       shirt.total = this.calculator.calculateItemTotal(shirt);
       this.items.push(shirt);
     }
   }

   public increaseCount(shirt:IShirt){
     this.items.filter((element, index, array) => {
         if(element.id === shirt.id){
           element.count++;
           element.total = this.calculator.calculateItemTotal(element);
           return element;
         }
     });
   }

   public decreaseCount(shirt:IShirt){
     this.items.filter((element, index, array) => {
         if(element.id === shirt.id){
           element.count--;
           element.total = this.calculator.calculateItemTotal(element);
           return element;
         }
     });
   }

   public deleteItem(shirt: IShirt){
     this.items.splice(this.items.indexOf(shirt,0),1);
   }

   public hasItem(shirt: IShirt): boolean{
     return this.items.some(e => e.id === shirt.id);
   }
}
