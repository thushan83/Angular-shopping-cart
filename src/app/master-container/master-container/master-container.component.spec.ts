/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MasterContainerComponent } from './master-container.component';

describe('MasterContainerComponent', () => {
  let component: MasterContainerComponent;
  let fixture: ComponentFixture<MasterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
