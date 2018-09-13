import { Component, OnInit } from '@angular/core';
import { ShirtService } from '../shirt.service';
import { IShirt } from '../ishirt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { Constants } from '../../constants';
import { IFilterParams } from '../shirt-filter/ifilterparams';

@Component({
  selector: 'app-shirt-items',
  templateUrl: './shirt-items.component.html',
  styleUrls: ['./shirt-items.component.css']
})
export class ShirtItemsComponent implements OnInit {

  allshirts: IShirt[];
  shirts: IShirt[];
  subscription: Subscription;

  constructor(private shirtService: ShirtService,
      private messageService: MessageService) { }

  ngOnInit() {
      this.shirtService.getAllShirts()
       .subscribe( data => {
         this.allshirts = data;
         this.shirts = data
       });

       this.subscription = this.messageService.getMessage()
       .subscribe(message => {
         if (message.event == Constants.MSG_FILTER_REQUEST){
              let data = message.data;
              this.shirts = this.applyFilter(this.allshirts,data);
         }
       });
  }

  applyFilter(items:IShirt[],data:IFilterParams):IShirt[]{    
      //Reset the filter for default value selections
            if(data.color == Constants.FILTER_DEFAULT_COLOR && data.size == Constants.FILTER_DEFAULT_SIZE){
                  return items;
            }else if(data.color == Constants.FILTER_DEFAULT_COLOR && data.size != Constants.FILTER_DEFAULT_SIZE){
                  return items.filter((element,index,array) => {
                    if(element.size == data.size){
                      return element;
                    }
                  });
            }else if(data.color != Constants.FILTER_DEFAULT_COLOR && data.size == Constants.FILTER_DEFAULT_SIZE){
                  return items.filter((element,index,array) => {
                    if(element.colour == data.color){
                      return element;
                    }
                });
            }else{
                return items.filter((element,index,array) => {
                  if(element.colour == data.color && element.size == data.size){
                    return element;
                  }
                });
            }
  }

}
