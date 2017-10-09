import { AppRoutingModule } from './../routing/app.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class SharedModule {
}
