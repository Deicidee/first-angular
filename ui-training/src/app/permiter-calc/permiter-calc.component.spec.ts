import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermiterCalcComponent } from './permiter-calc.component';

describe('PermiterCalcComponent', () => {
  let component: PermiterCalcComponent;
  let fixture: ComponentFixture<PermiterCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermiterCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermiterCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
