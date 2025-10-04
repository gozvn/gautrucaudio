import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // const token = localStorage.getItem('token');
    const ve:string = "vi1p";
    if (ve === "vip") {
      return true; // Cho phép vào route
    }

    // Nếu chưa đăng nhập → chuyển hướng về trang login
    this.router.navigate(['/login']);
    return false;
  }
}
