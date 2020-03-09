import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public items: string[] = ['Item1', 'Item2', 'Item3', 'Item4']
  public toggled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
