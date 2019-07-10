import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;

    constructor(private http: HttpClient) {
    }

    login(user: User) {
        window.localStorage.setItem('user', JSON.stringify(user));
        this.isAuthenticated = true;
    }

    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(`http://localhost:3000/users`, user)
    }

}
