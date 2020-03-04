import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { EncapsulationTestEmulatedComponent } from './encapsulation-test-emulated/encapsulation-test-emulated.component';
import { EncapsulationTestShadowComponent } from './encapsulation-test-shadow/encapsulation-test-shadow.component';
import { EncapsulationTestNoneComponent } from './encapsulation-test-none/encapsulation-test-none.component';
import { EncapsulationChildTestComponent } from './encapsulation-child-test/encapsulation-child-test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    EncapsulationChildTestComponent,
    EncapsulationTestEmulatedComponent,
    EncapsulationTestShadowComponent,
    EncapsulationTestNoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ViewEncapsulationModule { }
