import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  apiurl = environment.apiUrl;

  constructor(private loginservice: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.loginservice.getToken();
    const user_id = localStorage.getItem('user_id');
    const role = localStorage.getItem('role');
    
    if(token){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'user_id': user_id ? user_id : '', // Add user ID to the headers (if available)
          role: role
        }
      });
    }

    return next.handle(request);
  }
}
