import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateportfolioComponent } from './createportfolio.component';

describe('CreateportfolioComponent', () => {
  let component: CreateportfolioComponent;
  let fixture: ComponentFixture<CreateportfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateportfolioComponent]
    });
    fixture = TestBed.createComponent(CreateportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});