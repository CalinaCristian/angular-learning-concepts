import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsumerComponent } from './consumer/consumer.component';
import { Routes, RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

const routes: Routes = [
  { path: '', component: ConsumerComponent }
];

@NgModule({
  declarations: [ConsumerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LottieModule.forRoot({ player: playerFactory, useCache: true }),
  ],
  providers: [
  ]
})
export class ObservablesAndAsyncPipeModule { }
