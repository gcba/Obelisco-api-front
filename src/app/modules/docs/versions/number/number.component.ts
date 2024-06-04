import { Component, OnInit } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';
import { DataService } from 'src/app/services/request-data/data.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  public versionsNumberUrl = URL_BASE + '/api/obelisco/versions/1.53.0';
  public dataNumber: any;
  public shorthandNumber: boolean = false;

  public isLoading: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData(this.versionsNumberUrl).subscribe(
      (data) => {
        this.dataNumber = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  toggleNumber() {
    this.shorthandNumber = !this.shorthandNumber;
  }
}
