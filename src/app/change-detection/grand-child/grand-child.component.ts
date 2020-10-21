import { Component, OnInit, ViewChild, NgZone, Input, AfterViewChecked } from '@angular/core';
import { Titles } from '../utils/titles-interface';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit, AfterViewChecked {
  @Input() titles: Titles;
  @Input() grandChildTitle: string;
  @Input() usePrimitives: boolean;

  @ViewChild('grandChild') grandChild;

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.grandChild.nativeElement.className = 'grand-child highlight';

    this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this.grandChild.nativeElement.className = 'grand-child';
    }, 500));
  }

}
