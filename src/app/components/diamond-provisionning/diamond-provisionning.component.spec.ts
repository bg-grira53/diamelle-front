import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondProvisionningComponent } from './diamond-provisionning.component';

describe('DiamondProvisionningComponent', () => {
  let component: DiamondProvisionningComponent;
  let fixture: ComponentFixture<DiamondProvisionningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondProvisionningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondProvisionningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
