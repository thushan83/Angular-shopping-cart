import { Component, OnInit, Input } from '@angular/core';
import { ShirtService } from '../shirt.service';
import { IShirt } from '../ishirt';
import { MessageService } from '../../services/message.service';
import { Constants } from '../../constants';
import { IFilterParams } from './ifilterparams';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-shirt-filter',
  templateUrl: './shirt-filter.component.html',
  styleUrls: ['./shirt-filter.component.css']
})
export class ShirtFilterComponent implements OnInit {

  @Input() public type: String;

  data:any[];
  selection = {color:"",size:""};

  private shirts:IShirt[];
  private colors=[Constants.FILTER_DEFAULT_COLOR];
  private sizes=[Constants.FILTER_DEFAULT_SIZE];

  constructor(private shirtService:ShirtService,
     private messageService: MessageService,
     @Inject(LOCAL_STORAGE) private storage: StorageService,) {

  }

  ngOnInit() {
    this.storage.set(Constants.COLOR_DD_KEY,null);
    this.storage.set(Constants.SIZE_DD_KEY,null);
    this.selection.color = Constants.FILTER_DEFAULT_COLOR;
    this.selection.size = Constants.FILTER_DEFAULT_SIZE;

    this.shirtService.getAllShirts()
     .subscribe(dt => {
           this.shirts = dt;
           dt.forEach((shirt) => {
               if(!this.colors.includes(shirt.colour)){
                  this.colors.push(shirt.colour);
               }

               if(!this.sizes.includes(shirt.size)){
                  this.sizes.push(shirt.size);
               }
           });

           if(this.type === "color"){
             this.data = this.colors;
           }

           if(this.type === "size"){
             this.data = this.sizes;
           }
   });
  }

  onChange(value){
    if(this.type === "color"){
      let size_stored = this.storage.get(Constants.SIZE_DD_KEY);
      this.selection.color = value;
      //If size selection done before that value will be read
      //from the storage else the default value will be used
      if (size_stored != null && size_stored != ""){
         this.selection.size = size_stored;
      }
      this.storage.set(Constants.COLOR_DD_KEY,value);
    }

    if(this.type === "size"){
      let color_stored = this.storage.get(Constants.COLOR_DD_KEY);
      this.selection.size = value;
      //If size selection done before that value will be read
      //from the storage else the default value will be used
      if (color_stored != null && color_stored != ""){
         this.selection.color = color_stored;
      }
      this.storage.set(Constants.SIZE_DD_KEY,value);
    }

    let message = {event:Constants.MSG_FILTER_REQUEST , data:this.selection};
    this.messageService.sendMessage(message);
  }
}
