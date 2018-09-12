import { Component, OnInit, Input } from '@angular/core';
import { IShirt } from '../ishirt';
import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { Constants } from '../../constants';

@Component({
  selector: 'app-shirt-item',
  templateUrl: './shirt-item.component.html',
  styleUrls: ['./shirt-item.component.css']
})
export class ShirtItemComponent implements OnInit {

  @Input() public entity: IShirt;

  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {
  }

  selectShirt(shirt){
    this.storage.set(Constants.SELECTED_SHIRT_KEY,shirt)
    this.router.navigate(['details']);
  }
}
