import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ChildWithOnPushComponent } from './child-with-on-push/child-with-on-push.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GrandChildWithOnPushComponent } from './grand-child-with-on-push/grand-child-with-on-push.component';
import { ParentComponent } from './parent/parent.component';
import { ParentWithOnPushComponent } from './parent-with-on-push/parent-with-on-push.component';

const routes: Routes = [
  { path: '', component: DemoComponent }
];

@NgModule({
  declarations: [
    DemoComponent,
    ChildComponent,
    ChildWithOnPushComponent,
    GrandChildComponent,
    GrandChildWithOnPushComponent,
    ParentComponent,
    ParentWithOnPushComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class ChangeDetectionModule { }
