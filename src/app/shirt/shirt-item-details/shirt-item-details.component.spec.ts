import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtItemDetailsComponent } from './shirt-item-details.component';

describe('ShirtItemDetailsComponent', () => {
  let component: ShirtItemDetailsComponent;
  let fixture: ComponentFixture<ShirtItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
