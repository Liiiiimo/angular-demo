import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
