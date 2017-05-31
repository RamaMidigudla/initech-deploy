import { Component, OnInit } from '@angular/core';
import { ServiceRequestInfoService } from '../service/service-request-info.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppConstants }  from '../utils/app.constants';

@Component({
  selector: 'app-view-thermal',
  templateUrl: './view-thermal.component.html',
  styleUrls: ['./view-thermal.component.css']
})
export class ViewThermalComponent implements OnInit {

 
  imageNames:string[] =[];
  imageUrls:string[] =[];
  public myInterval: number = 5000;


constructor(private serviceRequestInfoService: ServiceRequestInfoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.serviceRequestInfoService.getImageFileNames(this.route.snapshot.params['serviceRequestId']).subscribe(
      data => {this.imageNames = data; this.getImageUrls(this.imageNames, this.route.snapshot.params['serviceRequestId'])});
  }

    getImageUrls(imageNames,serviceRequestID): void {
      for(let imageName of imageNames){
        this.imageUrls.push(`${AppConstants.API_ENDPOINT}/aws/s3/image/${serviceRequestID}/${imageName}/`);
      }
    }


}
