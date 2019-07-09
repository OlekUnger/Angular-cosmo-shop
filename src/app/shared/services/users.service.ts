import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map, switchMap} from 'rxjs/operators';
import {User} from '../interfaces/user';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) {
    }

    getUserByLogin(login: string): Observable<User> {
        return this.http.get<User>(`http://localhost:3000/users?login=${login}`)
            .pipe(map((user: User) => user[0] ? user[0] : undefined));
    }

}
