import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

// var // global 

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    
    private backendServer = environment.backendServer // load enviroment backendServer  = URL

    constructor(private http: HttpClient) { 
        
    }
    _buildUrl(path:string) {

        const host = this.backendServer.host; // khai bao hang so
        const port = this.backendServer.port;
        const prePath = this.backendServer.prePath;
        let url = "http://"
        if ( port === 443 ){
            url = "https://"
        } 
        return `${url}${host}:${port}${prePath}/${path}`;
    }
    // get tra ve data Observable kieu any.
    get(path: string, options:any, callback: any = null): Observable<any> {
        options.headers = {
            // 'xc-token': 'xg1z5ECTpAl98YWRFy6kQXnQP5KKtxeTAHNXFc0W',
        }
        return this.http.get<any>(this._buildUrl(path), options)
            .pipe(callback || '');
    }
// ?limit=6&shuffle=0&offset=0

}