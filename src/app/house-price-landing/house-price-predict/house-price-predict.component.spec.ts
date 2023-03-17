import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePricePredictComponent } from './house-price-predict.component';

describe('HousePricePredictComponent', () => {
  let component: HousePricePredictComponent;
  let fixture: ComponentFixture<HousePricePredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousePricePredictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousePricePredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
