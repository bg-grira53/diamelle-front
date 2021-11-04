import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvDiamondComponent } from './list-prov-diamond.component';

describe('ListProvDiamondComponent', () => {
  let component: ListProvDiamondComponent;
  let fixture: ComponentFixture<ListProvDiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProvDiamondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
