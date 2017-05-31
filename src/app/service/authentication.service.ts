import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AppConstants } from '../utils/app.constants';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(`${AppConstants.API_ENDPOINT}/api/auth/login`, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));

                }
            });
    }


    logout(): void {
        // clear token remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
    }
}