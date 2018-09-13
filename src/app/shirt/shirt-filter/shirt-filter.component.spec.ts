import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtFilterComponent } from './shirt-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

describe('ShirtFilterComponent', () => {
  let component: ShirtFilterComponent;
  let fixture: ComponentFixture<ShirtFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtFilterComponent ],
      imports: [
        HttpClientModule,
        StorageServiceModule
      ]
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
