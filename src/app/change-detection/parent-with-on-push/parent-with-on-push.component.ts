import { Component, OnInit, ViewChild, NgZone, Input, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { Titles } from '../utils/titles-interface';

@Component({
  selector: 'app-parent-with-on-push',
  templateUrl: './parent-with-on-push.component.html',
  styleUrls: ['./parent-with-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentWithOnPushComponent implements OnInit, AfterViewChecked {
  @Input() titles: Titles;
  @Input() parentTitle: string;
  @Input() childTitle: string;
  @Input() grandChildTitle: string;
  @Input() usePrimitives: boolean;

  @ViewChild('parent') parent;

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.parent.nativeElement.className = 'parent highlight';

    this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this.parent.nativeElement.className = 'parent';
    }, 500));
  }
}
