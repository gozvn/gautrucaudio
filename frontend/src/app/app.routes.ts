import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path : '', loadChildren: () => import('./modules/home/services/home.module').then(m => m.HomeModule),title : 'Trang Chủ'
    }, // Load module Home.
    { 
        path : 'truyen', loadChildren: () => import('./modules/truyen/truyen.module').then(m => m.TruyenModule), title : 'Danh sách Truyện'
    }, // Load module Truyen.
    { 
        path : 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), title : 'Dashboard - Quản Trị' 
    }, 
    {
        path : 'error' , loadChildren:() => import('./modules/error/error-module').then(m => m.ErrorModule)
    },
    {
        path: '**',
        redirectTo : 'error/404-page'
        // Alternatively, use a component: component: NotFoundComponent
    },
];
