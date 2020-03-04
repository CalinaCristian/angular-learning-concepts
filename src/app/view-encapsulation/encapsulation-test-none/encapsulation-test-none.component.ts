import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-test-none',
  templateUrl: './encapsulation-test-none.component.html',
  styleUrls: ['./encapsulation-test-none.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EncapsulationTestNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
