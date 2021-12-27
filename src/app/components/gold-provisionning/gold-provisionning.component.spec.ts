import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldProvisionningComponent } from './gold-provisionning.component';

describe('GoldProvisionningComponent', () => {
  let component: GoldProvisionningComponent;
  let fixture: ComponentFixture<GoldProvisionningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldProvisionningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldProvisionningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
