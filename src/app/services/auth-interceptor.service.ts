import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  // Interface welches implementiert wird. Agiert als Überklasse, von der wir erben, mit dem Unterschied das es uns zwingt eine Methode zu implementieren.

  constructor(private router: Router, /*private authService: AuthService*/) { }

    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');

      if (token) {
        // Clone the request and attach the token
        request = request.clone({
          setHeaders: {
          Authorization: `Token ${token}`
          }
        });
      }

      return next.handle(request).pipe(
        catchError((err) => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              this.router.navigateByUrl('/login');
            }
          }
          return throwError( () => err);
        })
      );
    }
}
