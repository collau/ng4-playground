import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { Component1Component } from '../component1/component1.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'result',
    component: Component1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
