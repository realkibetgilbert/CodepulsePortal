import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user = new BehaviorSubject<User | undefined>(undefined);
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(model: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.localApiUrl}/Auth/Login`,
      {
        userName: model.email,
        password: model.password,
      }
    );
  }
  logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
  }
  setUser(user: User): void {
    //STORE
    this.$user.next(user);

    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
  }

  user(): Observable<User | undefined> {
    return this.$user.asObservable();
  }

  getUser(): User | undefined {
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');

    if (email && roles) {
      const user: User = {
        email: email,
        roles: roles.split(','),
      };
      return user;
    }
    return undefined;
  }
}
