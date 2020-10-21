import { Component, OnInit, ViewChild, NgZone, Input, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { Titles } from '../utils/titles-interface';

@Component({
  selector: 'app-grand-child-with-on-push',
  templateUrl: './grand-child-with-on-push.component.html',
  styleUrls: ['./grand-child-with-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildWithOnPushComponent implements OnInit, AfterViewChecked {
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
