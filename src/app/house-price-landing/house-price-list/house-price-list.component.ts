import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HousePriceService} from '../house-price.service';
import {map} from 'rxjs/operators';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-house-price-list',
  templateUrl: './house-price-list.component.html',
  styleUrls: ['./house-price-list.component.scss']
})
export class HousePriceListComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource([]);
  priceListSubscription: Subscription;
  newPredictionSubscription: Subscription;

  displayedColumns: string[] = ['longitude', 'latitude', 'housing_median_age', 'total_rooms', 'total_bedrooms',
    'population', 'households', 'median_income', 'ocean_proximity',  'predicted_value', 'timestamp' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private housePriceService: HousePriceService) {
  }

  ngOnInit(): void {
    this.priceListSubscription = this.housePriceService.getHousePriceHistory().pipe(
      (map (data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.setDefaultSortingWithTimestamp();
        })
      )).subscribe();

    this.newPredictionSubscription = this.housePriceService.newPrediction.subscribe(data => {
      this.dataSource.data.push(data);
      this.dataSource._updateChangeSubscription();
      this.setDefaultSortingWithTimestamp();
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private setDefaultSortingWithTimestamp(): void {
    const sortState: Sort = {active: 'timestamp', direction: 'desc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  ngOnDestroy(): void {
    if (this.priceListSubscription) {
      this.priceListSubscription.unsubscribe();
      this.priceListSubscription = null;
    }
    if (this.newPredictionSubscription) {
      this.newPredictionSubscription.unsubscribe();
      this.newPredictionSubscription = null;
    }
  }

}
