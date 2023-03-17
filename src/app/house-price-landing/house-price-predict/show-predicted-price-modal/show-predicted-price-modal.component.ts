import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HousePriceModel} from '../../house-price-model';

@Component({
  selector: 'app-show-predicted-price-modal',
  templateUrl: './show-predicted-price-modal.component.html',
  styleUrls: ['./show-predicted-price-modal.component.scss']
})
export class ShowPredictedPriceModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ShowPredictedPriceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HousePriceModel,
  ) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
