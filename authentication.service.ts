import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';

const users=[
  {Username:'admin',Password: 'admin'},
  {Username:'user',Password:'user'},
]

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn:boolean=false;

  constructor() { }
  login (user: LoginModel) 
  {
    let filteredUsers = users.filter(c=>c.Username==user.Username&&c.Password==user.Password);
    if(filteredUsers.length){
      sessionStorage.setItem('currentUser',JSON.stringify(user));
      this.isLoggedIn=true;
      return true;
    }
    return false;
  }
  logout() {
    this.isLoggedIn=false;
    sessionStorage.removeItem('currentUser');
  }
}



