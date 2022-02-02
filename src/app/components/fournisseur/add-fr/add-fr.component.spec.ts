import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrComponent } from './add-fr.component';

describe('AddFrComponent', () => {
  let component: AddFrComponent;
  let fixture: ComponentFixture<AddFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
