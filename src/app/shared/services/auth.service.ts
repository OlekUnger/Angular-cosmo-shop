import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';


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
}
