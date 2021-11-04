import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListevehiculeComponent } from './listevehicule.component';

describe('ListevehiculeComponent', () => {
  let component: ListevehiculeComponent;
  let fixture: ComponentFixture<ListevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
