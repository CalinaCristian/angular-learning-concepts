import { Component, OnInit, ViewChild, NgZone, Input, AfterViewChecked } from '@angular/core';
import { Titles } from '../utils/titles-interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @ViewChild('child') child;
  @Input() titles: Titles;
  @Input() childTitle: string;
  @Input() grandChildTitle: string;
  @Input() usePrimitives: boolean;
  
  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.child.nativeElement.className = 'child highlight';

    this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this.child.nativeElement.className = 'child';
    }, 500));
  }

}
