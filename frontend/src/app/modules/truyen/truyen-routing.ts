import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './pages/list/list';
import { DetailTruyen } from './pages/detail/detail';

const routes: Routes = [
  { path: '',component: List },
  { path: ':id', component: DetailTruyen},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TruyenRouting {

}
