import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ServiceRequest } from '../model/serviceRequest';
import { AppConstants } from '../utils/app.constants';
import { HttpUtils } from '../utils/http.utils';

@Injectable()
export class CreateServiceRequestService {
    
    http: Http;

    constructor(public _http: Http) {
        this.http = _http;
    }


    postServiceRequest(serviceRequest: ServiceRequest) {
        return this.http.post(`${AppConstants.API_ENDPOINT}/api/serviceRequest/save/`,
            JSON.stringify(serviceRequest), HttpUtils.getHeaders()).map((res: Response) => res.json());
    }

}