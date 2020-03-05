import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsumerComponent } from './consumer/consumer.component';
import { Routes, RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RxPlaygroundComponent } from './rx-playground/rx-playground.component';

export function playerFactory() {
  return import('lottie-web');
}

const routes: Routes = [
  { path: '', component: ConsumerComponent }
];

@NgModule({
  declarations: [ConsumerComponent, RxPlaygroundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LottieModule.forRoot({ player: playerFactory, useCache: true }),
    InfiniteScrollModule
  ],
  providers: [
  ]
})
export class ObservablesAndAsyncPipeModule { }
