import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class demoInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(
        request: HttpRequest<any>, // default
        next: HttpHandler): Observable<HttpEvent<any>> { // default
            const Token = "Hello token";
            const header = new HttpHeaders().set('a-token',Token);
            request = request.clone({
                headers : header
        });

        return next.handle(request)
    }
}