import { Component, OnInit, ViewChild, NgZone, Input, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { Titles } from '../utils/titles-interface';

@Component({
  selector: 'app-child-with-on-push',
  templateUrl: './child-with-on-push.component.html',
  styleUrls: ['./child-with-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildWithOnPushComponent implements OnInit, AfterViewChecked {
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
