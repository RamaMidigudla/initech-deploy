import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'app/service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  providers:[AuthenticationService],
  templateUrl: './login.component.html',
})
export class LoginComponent  {
    model: any = {};
    loading = false;
    returnUrl: string;
    message: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

      login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.message = "Username or password is invalid";
                    this.loading = false;
                });
    }

    
}
