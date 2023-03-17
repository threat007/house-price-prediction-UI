import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HousePriceService} from '../house-price.service';
import {map} from 'rxjs/operators';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ShowPredictedPriceModalComponent} from './show-predicted-price-modal/show-predicted-price-modal.component';
import {Subscription} from 'rxjs';
import {HousePriceModel} from "../house-price-model";
import OCEAN_PROXIMITY from "../ocean-proximity-values.enum";

@Component({
  selector: 'app-house-price-predict',
  templateUrl: './house-price-predict.component.html',
  styleUrls: ['./house-price-predict.component.scss']
})
export class HousePricePredictComponent implements OnInit, OnDestroy {

  public housePricePredictionForm: FormGroup;
  public formLatitude: FormControl;
  public formLongitude: FormControl;
  public formHousingMedianAge: FormControl;
  public formMedianIncome: FormControl;
  public formTotalRooms: FormControl;
  public formTotalBedrooms: FormControl;
  public formHouseholds: FormControl;
  public formOceanProximity: FormControl;
  public formPopulation: FormControl;

  oceanProximityValues = [OCEAN_PROXIMITY.nearOcean, OCEAN_PROXIMITY.inland, OCEAN_PROXIMITY.nearBay, OCEAN_PROXIMITY.lessthan1H];
  predictSubscription: Subscription;

  constructor(private dialog: MatDialog,
              private housePriceService: HousePriceService) { }

  ngOnInit(): void {

    this.formLatitude =  new FormControl('', [Validators.required, Validators.pattern(`^-?[0-9]\\d*(\\.\\d+)?$`)]);
    this.formLongitude = new FormControl('', [Validators.required, Validators.pattern(`^-?[0-9]\\d*(\\.\\d+)?$`)]);
    this.formHousingMedianAge = new FormControl('', [Validators.required, Validators.pattern(`^\\d*\\.?\\d+$`)]);
    this.formMedianIncome = new FormControl('', [Validators.required, Validators.pattern(`^\\d*\\.?\\d+$`)]);
    this.formTotalRooms = new FormControl('', [Validators.required, Validators.pattern(`^\\d*\\.?\\d+$`)]);
    this.formTotalBedrooms = new FormControl('', [Validators.required, Validators.pattern(`^\\d*\\.?\\d+$`)]);
    this.formHouseholds = new FormControl('', [Validators.required, Validators.pattern(`^\\d*\\.?\\d+$`)]);
    this.formOceanProximity = new FormControl('', Validators.required);
    this.formPopulation = new FormControl('', [Validators.required, Validators.pattern(`^\\d*\\.?\\d+$`)]);

    this.housePricePredictionForm = new FormGroup({
      'latitude': this.formLatitude,
      'longitude': this.formLongitude,
      'housingMedianAge': this.formHousingMedianAge,
      'medianIncome': this.formMedianIncome,
      'totalRooms': this.formTotalRooms,
      'totalBedrooms': this.formTotalBedrooms,
      'households': this.formHouseholds,
      'population': this.formPopulation,
      'oceanProximity': this.formOceanProximity
    });
  }

  resetForm(): void {
    this.housePricePredictionForm.reset();
    Object.keys(this.housePricePredictionForm.controls).forEach(key => {
      this.housePricePredictionForm.controls[key].setErrors(null)
    });
  }

  predictHouseValue(): void {
    if (this.housePricePredictionForm.valid) {
      const housePriceModel = {
        households: this.formHouseholds.value,
        housing_median_age: this.formHousingMedianAge.value,
        latitude: this.formLatitude.value,
        longitude: this.formLongitude.value,
        median_income: this.formMedianIncome.value,
        ocean_proximity: this.formOceanProximity.value,
        population: this.formPopulation.value,
        predicted_value: 0,
        timestamp: '',
        total_bedrooms: this.formTotalBedrooms.value,
        total_rooms: this.formTotalRooms.value
      };
      this.predictSubscription = this.housePriceService.predictHousePrice(housePriceModel).pipe(map(data => {
          this.housePriceService.setNewPredictionData(data);
          this.showPredictedPrice(data);
          this.resetForm();
        })
      ).subscribe();
    }
  }

  showPredictedPrice(housePrice: HousePriceModel): MatDialogRef<ShowPredictedPriceModalComponent> {
    return this.dialog.open(ShowPredictedPriceModalComponent, {
      width: '400px',
      data: housePrice,
    });
  }

  ngOnDestroy(): void {
    if (this.predictSubscription) {
      this.predictSubscription.unsubscribe();
      this.predictSubscription = null;
    }
  }

}
