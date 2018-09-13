import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartCalculator } from './cart-calculator';

describe('CartCalculator', () => {

  let calculator: CartCalculator;

  beforeEach(async(() => {
    calculator = new CartCalculator();
  }));

  it('should create an instance', () => {
    expect(calculator).toBeTruthy();
  });

  it('should calculate item total', () => {
    let shirt = {id:"0",price:88,picture:"https://unsplash.it/128/128"
    ,colour:"brown",size:"m",name:"Southview Clarke"
    ,quantity:"2",count:4,total:0};
     let total = calculator.calculateItemTotal(shirt);
     expect(352).toBe(total);
  });

  it('should calculate cart sub total', () => {
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
    let subtotal = calculator.calculateCartSubTotal(shirts);
    expect(352+133+60).toBe(subtotal);
  });
});
