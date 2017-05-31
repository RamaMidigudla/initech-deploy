import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ServiceRequest } from '../model/serviceRequest';
import { AppConstants }  from '../utils/app.constants';
import { HttpUtils }  from '../utils/http.utils';

@Injectable()
export class ServiceRequestInfoService {

  http: Http;
  
  constructor(public _http: Http) {
    this.http = _http;
  }


  getAll(): Observable<ServiceRequest[]> {
    return this.http
      .get(`${AppConstants.API_ENDPOINT}/api/serviceRequest/getAll`, HttpUtils.getHeaders()).map((res: Response) => res.json());
  }

  getBySRId(serviceRequestID) : Observable<ServiceRequest>{
   return this.http
      .get(`${AppConstants.API_ENDPOINT}/api/serviceRequest/${serviceRequestID}`, HttpUtils.getHeaders())
      .map((res: Response) => res.json());
  }

   getImageFileNames(serviceRequestID) : Observable<string[]>{
        return this.http
      .get(`${AppConstants.API_ENDPOINT}/aws/s3/imageNames/${serviceRequestID}`, HttpUtils.getHeaders())
      .map((res: Response) => res.json());

    }

}




