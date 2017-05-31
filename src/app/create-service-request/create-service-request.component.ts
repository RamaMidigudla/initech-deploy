import { Component, OnInit, Input, AfterViewChecked, ViewChild } from '@angular/core';
import { CreateServiceRequestService } from '../service/createServiceRequest.service';
import { StateService } from '../service/state.service';
import { ServiceRequest } from '../model/serviceRequest';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-service-request',
  templateUrl: './create-service-request.component.html',
  styleUrls: ['./create-service-request.component.css']
})
export class CreateServiceRequestComponent implements OnInit {

  private model: ServiceRequest;
  private states: string[];
  @Input() serviceRequest: ServiceRequest;
  responseStatus: Object = [];


  constructor(private stateService: StateService, private createServiceRequestService: CreateServiceRequestService) {
    this.states = stateService.getStateList();
    this.model = new ServiceRequest('', '', '', this.states[0], '', '');
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  onSubmitPost() {
    this.createServiceRequestService.postServiceRequest(this.model).subscribe(data => this.responseStatus = data);
  }

  ngOnInit() {
  }

}
