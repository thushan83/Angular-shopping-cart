import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtFilterComponent } from './shirt-filter.component';

describe('ShirtFilterComponent', () => {
  let component: ShirtFilterComponent;
  let fixture: ComponentFixture<ShirtFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
