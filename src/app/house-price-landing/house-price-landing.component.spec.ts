import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePriceLandingComponent } from './house-price-landing.component';

describe('HousePriceLandingComponent', () => {
  let component: HousePriceLandingComponent;
  let fixture: ComponentFixture<HousePriceLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousePriceLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousePriceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
