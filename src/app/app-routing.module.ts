import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'view-encapsulation',
    loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule),
  },
  {
    path: 'observables-and-async-pipe',
    loadChildren: () => import('./observables-and-async-pipe/observables-and-async-pipe.module').then(m => m.ObservablesAndAsyncPipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
