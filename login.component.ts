import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login-model';
import { AuthenticationService } from './authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel;
  loginForm: FormGroup;


  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.loginModel=new LoginModel('','');
  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      Username: new FormControl(this.loginModel.Username),
      Password: new FormControl(this.loginModel.Password)
  });

  }

  submitted = false;
  //define a getter property
  get f() { return this.loginForm.controls;}

  submit() {
    this.submitted=true;
    this.loginModel.Username=this.f.Username.value;
    this.loginModel.Password=this.f.Password.value;
    if(this.authService.login(this.loginModel)){
          let redirectUrl = this.activeRoute.snapshot.queryParams["returnUrl"] || "/contact";
          this.router.navigate([redirectUrl]);
    }
  }
}
