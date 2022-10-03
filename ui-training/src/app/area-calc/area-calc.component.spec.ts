import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCalcComponent } from './area-calc.component';

describe('AreaCalcComponent', () => {
  let component: AreaCalcComponent;
  let fixture: ComponentFixture<AreaCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
