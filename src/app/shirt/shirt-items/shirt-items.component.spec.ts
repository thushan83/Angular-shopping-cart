import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShirtItemsComponent } from './shirt-items.component';
import { ShirtItemComponent } from '../shirt-item/shirt-item.component';


describe('ShirtItemsComponent', () => {
  let component: ShirtItemsComponent;
  let fixture: ComponentFixture<ShirtItemsComponent>;
  let shirts = [
      {
        id: "0",
        price: 88,
        picture: "https://unsplash.it/128/128",
        colour: "brown",
        size: "m",
        name: "Southview Clarke",
        quantity: "2",
        count: 4,
        total: 352
      },
      {
        id: "3",
        price: 19,
        picture: "https://unsplash.it/128/128",
        colour: "green",
        size: "m",
        name: "Yogaville Lamb",
        quantity: "5",
        count: 7,
        total: 133
      },
      {
        id: "11",
        colour: "string",
        name: "string",
        size: "string",
        picture: "https://unsplash.it/128/128",
        price: 10,
        quantity: "62",
        count: 6,
        total: 60
      }
    ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtItemsComponent , ShirtItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should filter (green/m) items properly', () => {

    let expected = [{
        id: "3",
        price: 19,
        picture: "https://unsplash.it/128/128",
        colour: "green",
        size: "m",
        name: "Yogaville Lamb",
        quantity: "5",
        count: 7,
        total: 133
    }];

    let result = component.applyFilter(shirts,{color:"green", size:"m"});
    expect(expected).toBe(result);
  });

  it('should filter (brown/m) items properly', () => {

    let expected = [{
      id: "0",
      price: 88,
      picture: "https://unsplash.it/128/128",
      colour: "brown",
      size: "m",
      name: "Southview Clarke",
      quantity: "2",
      count: 4,
      total: 352
    }];

    let result = component.applyFilter(shirts,{color:"brown", size:"m"});
     expect(expected).toBe(result);
  });

});
