import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDetailsComponent } from './entrada-details.component';

describe('EntradaDetailsComponent', () => {
  let component: EntradaDetailsComponent;
  let fixture: ComponentFixture<EntradaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
