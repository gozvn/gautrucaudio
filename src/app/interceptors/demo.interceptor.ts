import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DemoInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(
        request: HttpRequest<any>, // default
        next: HttpHandler): Observable<HttpEvent<any>> { // default
            const Token = "xg1z5ECTpAl98YWRFy6kQXnQP5KKtxeTAHNXFc0W";
            const header = new HttpHeaders().set('xc-token',Token);
            request = request.clone({
                headers : header
        });
        console.log("Interceptor called !!!");
        return next.handle(request)
    }
}