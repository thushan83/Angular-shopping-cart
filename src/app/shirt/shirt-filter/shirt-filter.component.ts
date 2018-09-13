import { Component, OnInit, Input } from '@angular/core';
import { ShirtService } from '../shirt.service';
import { IShirt } from '../ishirt';
import { MessageService } from '../../services/message.service';
import { Constants } from '../../constants';

@Component({
  selector: 'app-shirt-filter',
  templateUrl: './shirt-filter.component.html',
  styleUrls: ['./shirt-filter.component.css']
})
export class ShirtFilterComponent implements OnInit {

  @Input() public type: String;

  data:any[];

  private shirts:IShirt[];
  private colors=["color"];
  private sizes=["size"];

  constructor(private shirtService:ShirtService,
     private messageService: MessageService) {
  }

  ngOnInit() {

    this.shirtService.getAllShirts()
     .subscribe( data => {

           this.shirts = data;
           this.shirts.forEach((shirt) => {
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

          }
      );
  }

  onChange(value){
    let message = {event:Constants.MSG_FILTER_REQUEST , data:value};
    this.messageService.sendMessage(message);
  }

}
