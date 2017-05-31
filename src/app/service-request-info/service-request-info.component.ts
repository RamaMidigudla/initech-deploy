import { Component, OnInit, Input } from '@angular/core';
import { ServiceRequestInfoService } from '../service/service-request-info.service';
import { ServiceRequest } from '../model/serviceRequest';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-service-request-info',
  templateUrl: './service-request-info.component.html'
})
export class ServiceRequestInfoComponent implements OnInit {

  serviceRequests: ServiceRequest[] = [];

  constructor(private serviceRequestInfoService: ServiceRequestInfoService) {}

  ngOnInit() {
    this.serviceRequestInfoService.getAll().subscribe(data => this.serviceRequests = data);
  }


}
