import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

// var // global 

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    private isLoggedIn = false;
    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}
    login (email:string,password:string):boolean{
        if (email === "admin" && password === "123123"){
            this.isLoggedIn = true;
            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('token', 'jwt-random-something-string');
            }
            this.router.navigate(['/dashboard']);
            return true
        } else {
            return false
        }
    }

    logout(){
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        if (isPlatformBrowser(this.platformId)) {
        console.log(localStorage)
        return !!localStorage.getItem('token');
        }
        return false; // SSR không có localStorage → luôn trả false
    }
}