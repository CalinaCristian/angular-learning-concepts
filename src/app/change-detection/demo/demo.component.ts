import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  public titles = {
    parent: 'Parent',
    child: 'Child',
    grandChild: 'Grand child'
  };
  public parentTitle = 'Parent';
  public childTitle = 'Child';
  public grandChildTitle = 'Grand child';
  public withReferrenceChange = true;
  public usePrimitives = false;

  changeProp(ev, prop) {
    const { value } = ev.target;

    if (this.usePrimitives) {
      this[`${prop}Title`] = value;
    } else if (this.withReferrenceChange) {
      this.titles = {
        ...this.titles,
        [prop]: value
      };
    } else {
      this.titles[prop] = value;
    }
  }

  withReferrenceToggle(event) {
    this.withReferrenceChange = !this.withReferrenceChange;
  }
}
