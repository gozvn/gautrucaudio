import { Routes } from '@angular/router';

export const routes: Routes = [
    { path : '', loadChildren: () => import('./modules/home/services/home.module').then(m => m.HomeModule),title : 'Trang Chủ'}, // Load module Home.
    { path : 'truyen', loadChildren: () => import('./modules/truyen/truyen.module').then(m => m.TruyenModule), title : 'Danh sách Truyện' } // Load module Truyen.
];
