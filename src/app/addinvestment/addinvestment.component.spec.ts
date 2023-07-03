import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvestmentComponent } from './addinvestment.component';

describe('AddinvestmentComponent', () => {
  let component: AddinvestmentComponent;
  let fixture: ComponentFixture<AddinvestmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddinvestmentComponent]
    });
    fixture = TestBed.createComponent(AddinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
