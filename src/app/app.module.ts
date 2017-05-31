//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route';

//npm-utils
import { CarouselModule } from 'ngx-bootstrap/carousel';



//common layout components
import { HeaderComponent } from './common-layout/header/header.component';
import { LeftNavComponent } from './common-layout/left-nav/left-nav.component';
import { FooterComponent } from './common-layout/footer/footer.component';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateServiceRequestComponent } from './create-service-request/create-service-request.component';
import { ServiceRequestInfoComponent } from './service-request-info/service-request-info.component';
import { ThreeDViewerComponent } from './three-d-viewer/three-d-viewer.component';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewThermalComponent } from './view-thermal/view-thermal.component';


//services
import { AuthenticationService } from './service/authentication.service';
import { CreateServiceRequestService } from './service/createServiceRequest.service';   
import { StateService }  from './service/state.service';
import { ServiceRequestInfoService } from './service/service-request-info.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    FooterComponent,
    LoginComponent,
    CreateServiceRequestComponent,
    ServiceRequestInfoComponent,
    ThreeDViewerComponent,
    ViewServiceRequestComponent,
    ViewThermalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    StateService,
    CreateServiceRequestService,
    ServiceRequestInfoService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
