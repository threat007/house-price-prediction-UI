import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePriceListComponent } from './house-price-list.component';

describe('HousePriceListComponent', () => {
  let component: HousePriceListComponent;
  let fixture: ComponentFixture<HousePriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousePriceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousePriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
