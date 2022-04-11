import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class GameBoardHeadersInterceptor implements HttpInterceptor{
    constructor(){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                "X-RapidAPI-Key": "e80c6cbe6amshc57c61bc4a79c31p17cc98jsn13c5bcd24e6f",
            },
            setParams: {
              key: 'e40e743af2c94b0c916a8aa618fb4473',
            }
          });
          return next.handle(req);
        }
}

