import { Headers, RequestOptions } from '@angular/http';

export class HttpUtils {

    static getHeaders() {
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'X-Authorization': 'Bearer ' + currentUser.token, 'Content-Type': 'application/json' });
            return new RequestOptions({ headers: headers });
        }

    }

}