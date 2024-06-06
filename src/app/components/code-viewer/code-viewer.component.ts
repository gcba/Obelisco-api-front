import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { URL_BASE } from 'src/app/constants/components.constants';
import { DataService } from 'src/app/services/request-data/data.service';
import { ImageService } from 'src/app/services/request-images/image.service';
import { PdfService } from 'src/app/services/request-pdf/pdf.service';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule, ClipboardModule, NgxJsonViewerModule],
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class CodeViewerComponent implements OnInit {
  @Input() url!: string;
  @Input() forImage: boolean = false;
  @Input() forPdf: boolean = false;
  @Input() shortVersion: boolean = false;

  public URL_BASE = URL_BASE;
  public allUrl: string = '';
  public isLoading: boolean = true;
  public shorthandAll: boolean = false;
  public dataAll: any;
  public image: any;
  public pdf: any;

  constructor(
    private dataService: DataService,
    private imageService: ImageService,
    private pdfService: PdfService
  ) {
    this.allUrl = URL_BASE + this.url;
  }

  ngOnInit() {
    this.allUrl = URL_BASE + this.url;

    if (this.forImage) {
      this.fetchImage();
    } else if (this.forPdf) {
      this.fetchPdf();
    } else {
      this.fetchData();
    }
  }

  fetchData(): void {
    this.dataService.getData(this.allUrl).subscribe({
      next: (data) => {
        this.dataAll = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  fetchImage(): void {
    this.imageService.getImage(this.allUrl).subscribe({
      next: (image) => {
        console.log('Image received:', image);
        this.image = image;
      },
      error: (error) => {
        console.error('Error fetching image:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  fetchPdf(): void {
    this.pdfService.getPdf(this.allUrl).subscribe({
      next: (pdf) => {
        console.log('PDF received:', pdf);
        this.pdf = pdf;
      },
      error: (error) => {
        console.error('Error fetching PDF:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  toggleVisibility() {
    this.shorthandAll = !this.shorthandAll;
  }
}
