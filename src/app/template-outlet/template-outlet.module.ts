import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { GenericItemViewComponent } from './generic-item-view/generic-item-view.component';

const routes: Routes = [
  { path: '', component: DemoComponent }
];

@NgModule({
  declarations: [DemoComponent, GenericItemViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [ RouterModule ]
})
export class TemplateOutletModule { }
