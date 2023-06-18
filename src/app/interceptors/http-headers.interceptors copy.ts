import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import {catchError } from 'rxjs/operators';

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {
    
    constructor() {

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'f5905f5e51msh398d7117ef20a51p10eac5jsn462febe63576',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
              },
              setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473',
              }
        });
        return next.handle(req)
    }
}