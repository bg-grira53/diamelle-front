import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoulourPopupComponent } from './coulour-popup.component';

describe('CoulourPopupComponent', () => {
  let component: CoulourPopupComponent;
  let fixture: ComponentFixture<CoulourPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoulourPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoulourPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
