import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbCalcComponent } from './prime-numb-calc.component';

describe('PrimeNumbCalcComponent', () => {
  let component: PrimeNumbCalcComponent;
  let fixture: ComponentFixture<PrimeNumbCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumbCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumbCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
