import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtItemComponent } from './shirt-item.component';

describe('ShirtItemComponent', () => {
  let component: ShirtItemComponent;
  let fixture: ComponentFixture<ShirtItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
