import {IShirt} from '../shirt/ishirt';

export interface ICart {
   items: IShirt[];
   addNewItem(shirt: IShirt);
   getItemCount():number;
   hasItem(shirt: IShirt): boolean;
   deleteItem(shirt: IShirt);
   increaseCount(shirt: IShirt);
   decreaseCount(shirt: IShirt);
}
