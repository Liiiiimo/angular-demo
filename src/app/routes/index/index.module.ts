import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { ListComponent } from './page/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
