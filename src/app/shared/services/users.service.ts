import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {User} from '../interfaces/user';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    static url = environment.apiUrl;

    constructor(private http: HttpClient) {
    }



    createNewUser(user: User): Observable<User> {
        return this.http.post<User>(`${UsersService.url}/users.json`, user);
    }


}
