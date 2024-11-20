import { inject, Injectable } from '@angular/core';
import { DemoUserServiceService } from './demo-user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginFlag = false;
  demoUserService: DemoUserServiceService = inject(DemoUserServiceService);

  // constructor(private demoUserService: DemoUserServiceService) { }

  login(userName: string, password: string){
    console.log('login', userName, password);

   const isLoggedIn = this.demoUserService.userList.find((user) =>
      user.name === userName && user.password === password);

      if(isLoggedIn === undefined) 
        this.loginFlag = false;
      else
        this.loginFlag = false;
      return isLoggedIn;
  }

  logout(): void {
    this.loginFlag = false;
  }

  isAuthenticated(): boolean {
    if(this.loginFlag === true){
      return true;
    }else{
      return false;
    } 
  }
}
