import { Component, OnInit, ViewChild, NgZone, Input, AfterViewChecked } from '@angular/core';
import { Titles } from '../utils/titles-interface';
import { SomethingService } from '../demo/something.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [SomethingService]
})
export class ParentComponent implements OnInit, AfterViewChecked {
  @Input() titles: Titles;
  @Input() parentTitle: string;
  @Input() childTitle: string;
  @Input() grandChildTitle: string;
  @Input() usePrimitives: boolean;

  @ViewChild('parent') parent;

  constructor(private _ngZone: NgZone, private _myService: SomethingService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.parent.nativeElement.className = 'parent highlight';

    this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this.parent.nativeElement.className = 'parent';
    }, 500));
  }
}
