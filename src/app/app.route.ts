import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateServiceRequestComponent } from './create-service-request/create-service-request.component';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';
import { ThreeDViewerComponent } from './three-d-viewer/three-d-viewer.component';
import {ServiceRequestInfoComponent} from './service-request-info/service-request-info.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewThermalComponent } from './view-thermal/view-thermal.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: ServiceRequestInfoComponent, canActivate: [AuthGuard] },
    { path: 'newServiceRequest', component: CreateServiceRequestComponent, canActivate: [AuthGuard] },
    {path: 'viewServiceRequest/:serviceRequestId', component: ViewServiceRequestComponent, canActivate: [AuthGuard]},
    {path: 'threeViewer/:serviceRequestId', component: ThreeDViewerComponent, canActivate: [AuthGuard]},
     {path: 'viewThermal/:serviceRequestId', component: ViewThermalComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);