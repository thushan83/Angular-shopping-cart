/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingCartServiceService } from './shopping-cart-service.service';

describe('ShoppingCartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartServiceService]
    });
  });

  it('should ...', inject([ShoppingCartServiceService], (service: ShoppingCartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
