import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Login } from './modules/auth/pages/login/login';
import { layoutAuthComponent } from './layouts/auth/auth.component';

export const routes: Routes = [
    { 
        path : '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),title : 'Trang Chủ'
    }, // Load module Home.
    {
        path : 'auth',
        component : layoutAuthComponent, // Chia COmponent nho trong nay 
        loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    // {
    //     path : 'login', 
    //     redirectTo : 'auth/login'
    // },
    // { 
    //     path : 'truyen', loadChildren: () => import('./modules/truyen/truyen.module').then(m => m.TruyenModule), title : 'Danh sách Truyện'
    // }, // Load module Truyen.
    // { 
    //     path : 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), title : 'Dashboard - Quản Trị',
    //     canActivate: [AuthGuard]
    // }, 
    {
        path : 'error' , loadChildren:() => import('./modules/error/error-module').then(m => m.ErrorModule)
    },
    {
        path: '**',
        redirectTo : 'error/404-page'
        // Alternatively, use a component: component: NotFoundComponent
    },
];
