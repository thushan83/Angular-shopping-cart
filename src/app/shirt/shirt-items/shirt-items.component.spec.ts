import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtItemsComponent } from './shirt-items.component';

describe('ShirtItemsComponent', () => {
  let component: ShirtItemsComponent;
  let fixture: ComponentFixture<ShirtItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
