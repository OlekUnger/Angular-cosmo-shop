import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    static url = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    login(user: User) {
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

    remember(user: User) {
        window.localStorage.setItem('user', JSON.stringify({user: user.login, id: user.id}));
    }

    ifRemembered() {
        let user = window.localStorage.getItem('user');
        if (user) {
            this.isAuthenticated = true;
            return user;
        }
        return null;
    }

    getUserByParam(value: string, param: string): Observable<any> {
        return this.http.get<User>(`${AuthService.url}/users.json`)
            .pipe(map(users => {
                    if (!users) {
                        return null;
                    } else {
                        let key = Object.keys(users).filter(key => users[key][param] === value)[0];
                        return { ...users[key], id: key};
                    }
                })
            );
    }


}
