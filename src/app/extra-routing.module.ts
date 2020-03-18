import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from '@layout/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: 'doc', loadChildren: () => import('@routes/docs/docs.module').then(m => m.DocsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BlankComponent],
  exports: [RouterModule]
})
export class ExtraRoutingModule { }
