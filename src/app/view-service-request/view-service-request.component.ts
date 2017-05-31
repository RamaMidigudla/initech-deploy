import { Component, OnInit } from '@angular/core';
import { ServiceRequestInfoService } from 'app/service/service-request-info.service';
import { ServiceRequest } from '../model/serviceRequest';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-view-service-request',
  templateUrl: './view-service-request.component.html'
})
export class ViewServiceRequestComponent implements OnInit {

  serviceRequest;

  constructor(private serviceRequestInfoService: ServiceRequestInfoService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.serviceRequestInfoService.getBySRId(this.route.snapshot.params['serviceRequestId'])
      .subscribe(serviceRequest => this.serviceRequest = serviceRequest);
  }

  onSelect(serviceRequestId) {
    this.router.navigate(['/threeViewer', serviceRequestId]);
  }

  onSelectThermal(serviceRequestId) {
    this.router.navigate(['/viewThermal', serviceRequestId]);
  }


}
