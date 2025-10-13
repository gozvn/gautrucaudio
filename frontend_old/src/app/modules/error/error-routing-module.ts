import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { Errornotfound } from './errornotfound/errornotfound';
import { Erroraccessdenied } from './erroraccessdenied/erroraccessdenied';

const routes: Routes = [
    {path: '404-page', component: Errornotfound, data: { title: 'error.404notFound.title' }},
    {path: '403-access-denied', component: Erroraccessdenied, data: { title: 'error.403accessDenied.title' }},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
