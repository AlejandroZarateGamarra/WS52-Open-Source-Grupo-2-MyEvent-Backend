import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopremiumComponent } from './nopremium.component';

describe('NopremiumComponent', () => {
  let component: NopremiumComponent;
  let fixture: ComponentFixture<NopremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NopremiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NopremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
