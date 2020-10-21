import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'change-detection',
    loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'view-encapsulation',
    loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule),
  },
  {
    path: 'observables-and-async-pipe',
    loadChildren: () => import('./observables-and-async-pipe/observables-and-async-pipe.module').then(m => m.ObservablesAndAsyncPipeModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./template-outlet/template-outlet.module').then(m => m.TemplateOutletModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
