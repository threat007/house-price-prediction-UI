import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPredictedPriceModalComponent } from './show-predicted-price-modal.component';

describe('ShowPredictedPriceModalComponent', () => {
  let component: ShowPredictedPriceModalComponent;
  let fixture: ComponentFixture<ShowPredictedPriceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPredictedPriceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPredictedPriceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
