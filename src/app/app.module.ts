import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HousePriceLandingModule} from './house-price-landing/house-price-landing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HousePriceService} from './house-price-landing/house-price.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HousePriceLandingModule,
    BrowserAnimationsModule,
  ],
  providers: [HousePriceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
