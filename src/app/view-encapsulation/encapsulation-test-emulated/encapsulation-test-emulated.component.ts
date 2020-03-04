import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-test-emulated',
  templateUrl: './encapsulation-test-emulated.component.html',
  styleUrls: ['./encapsulation-test-emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EncapsulationTestEmulatedComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
