import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdsComponent } from './liste-ads.component';

describe('ListeAdsComponent', () => {
  let component: ListeAdsComponent;
  let fixture: ComponentFixture<ListeAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
