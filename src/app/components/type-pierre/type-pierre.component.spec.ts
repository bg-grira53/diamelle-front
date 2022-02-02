import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePierreComponent } from './type-pierre.component';

describe('TypePierreComponent', () => {
  let component: TypePierreComponent;
  let fixture: ComponentFixture<TypePierreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePierreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
