import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HousePriceModel} from "./house-price-model";
import {HttpClient} from "@angular/common/http";
import {HousePriceLandingModule} from "./house-price-landing.module";

@Injectable({
  providedIn: 'root'
})
export class HousePriceService {

  newPrediction: Subject<HousePriceModel> = new Subject<HousePriceModel>();

  constructor(private http: HttpClient) {
  }

  predictHousePrice(housePriceModel: HousePriceModel): Observable<HousePriceModel> {
    return this.http.post<HousePriceModel>('http://127.0.0.1/predict-price', housePriceModel);
  }

  getHousePriceHistory(): Observable<HousePriceModel[]> {
    return this.http.get<HousePriceModel[]>('http://127.0.0.1/prediction-history');
  }

  setNewPredictionData(newData: HousePriceModel): void {
    this.newPrediction.next(newData);
  }

}



