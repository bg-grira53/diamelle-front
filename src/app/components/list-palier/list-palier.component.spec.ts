import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPalierComponent } from './list-palier.component';

describe('ListPalierComponent', () => {
  let component: ListPalierComponent;
  let fixture: ComponentFixture<ListPalierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPalierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
