import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePaymentViewComponent } from './the-payment-view.component';

describe('ThePaymentViewComponent', () => {
  let component: ThePaymentViewComponent;
  let fixture: ComponentFixture<ThePaymentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePaymentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
