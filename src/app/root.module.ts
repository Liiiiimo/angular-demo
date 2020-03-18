import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [RootComponent],
  imports: [
    RootRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
