import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggler-code',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() shorthand = false;
  @Input() fullData?: Array<any>;
  @Input() lastElement?: any = {};
  
  @Output() toggle = new EventEmitter<void>();

  toggleShowMore() {
    this.toggle.emit();
  }

  getModifiedData(): any[] {
    if (this.fullData) {
      return [...this.fullData.slice(0, 3), this.lastElement];
    }
    return [];
  }
}
