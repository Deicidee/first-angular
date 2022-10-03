import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChangerComponent } from './component-changer.component';

describe('ComponentChangerComponent', () => {
  let component: ComponentChangerComponent;
  let fixture: ComponentFixture<ComponentChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
