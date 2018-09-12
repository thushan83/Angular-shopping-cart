import { Component, OnInit } from '@angular/core';
import { ShirtService } from '../shirt.service';
import { IShirt } from '../ishirt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirt-items',
  templateUrl: './shirt-items.component.html',
  styleUrls: ['./shirt-items.component.css']
})
export class ShirtItemsComponent implements OnInit {

  shirts: IShirt[];

  constructor(private shirtService: ShirtService) { }

  ngOnInit() {
      this.shirtService.getAllShirts()
       .subscribe( data => this.shirts = data);
  }

}
