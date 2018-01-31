import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyFirstInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ setHeaders: { 'Content-Type': 'application/json' } })
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') })
        req = req.clone({ setHeaders: { 'Access-Control-Allow-Origin': '*' } })
        // req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(req);
        return next.handle(req);
    }
}
