import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'extra', loadChildren: () => import('./extra.module').then(m => m.ExtraModule) },
  { path: '', loadChildren: () => import('./app.module').then(m => m.AppModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class RootRoutingModule { }
