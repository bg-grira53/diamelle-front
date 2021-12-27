import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvGoldComponent } from './list-prov-gold.component';

describe('ListProvGoldComponent', () => {
  let component: ListProvGoldComponent;
  let fixture: ComponentFixture<ListProvGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProvGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
