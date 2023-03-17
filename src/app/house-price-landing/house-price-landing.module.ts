import {NgModule} from '@angular/core';
import {HousePricePredictComponent} from './house-price-predict/house-price-predict.component';
import {HousePriceListComponent} from './house-price-list/house-price-list.component';
import {HousePriceLandingComponent} from './house-price-landing.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ShowPredictedPriceModalComponent } from './house-price-predict/show-predicted-price-modal/show-predicted-price-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from "@angular/common/http";
import {HousePriceService} from "./house-price.service";

@NgModule({
  declarations: [
    HousePriceLandingComponent,
    HousePricePredictComponent,
    HousePriceListComponent,
    ShowPredictedPriceModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
  ],
  exports: [
    HousePriceLandingComponent,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})

export class HousePriceLandingModule {
}
