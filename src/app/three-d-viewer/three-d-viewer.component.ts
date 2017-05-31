import { Component, OnInit } from '@angular/core';
import '../../assets/iniTech3D.js';
import { AppConstants } from '../utils/app.constants';
import { ActivatedRoute, Params } from '@angular/router';


declare var threeDModel: any;


@Component({
  selector: 'app-three-d-viewer',
  template: `<div id="id"> </div>`
})
export class ThreeDViewerComponent {


  serviceRequestId: string;
  objApiUrl: string;
  mtlApiUrl: string;


  objUrl = 'assets/mesh-hires-texture.obj';
  mtlUrl = 'assets/mesh-hires-texture.obj.mtl'

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.serviceRequestId = params['serviceRequestId']; });

    this.objApiUrl = `${AppConstants.API_ENDPOINT}/aws/s3/obj/${this.serviceRequestId}`;
    this.mtlApiUrl = `${AppConstants.API_ENDPOINT}/aws/s3/mtl/${this.serviceRequestId}`;

    threeDModel.init(this.objApiUrl, this.mtlApiUrl);
  }


}
