import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-test-shadow',
  templateUrl: './encapsulation-test-shadow.component.html',
  styleUrls: ['./encapsulation-test-shadow.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EncapsulationTestShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
