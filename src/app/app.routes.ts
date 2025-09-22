import { Routes } from '@angular/router';
import { HomePage } from './modules/home/pages/home-page/home-page';

export const routes: Routes = [
    { path : '', component: HomePage, title : 'Trang Chủ' },
    { path : 'truyen', loadChildren: () => import('./modules/truyen/services/truyen.module').then(m => m.TruyenModule), title : 'Danh sách Truyện' } // Load module Truyen.
];
