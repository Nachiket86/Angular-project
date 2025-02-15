import { inject, Injectable } from '@angular/core';
import { DemoUserServiceService } from '../../services/demo-user-service.service';
import { Router } from '@angular/router';
import { SigninService } from '../../Authentication/services/signin.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: User[] = [];
  router: Router = inject(Router);
  // demoUserService: DemoUserServiceService = inject(DemoUserServiceService);
  signInService: SigninService = inject(SigninService);

   constructor(private demoUserService: DemoUserServiceService) {
    this.userList = this.demoUserService.userList;
    console.log(this.userList);
    }


  login(userName: string, password: string): boolean{
    console.log('login', userName, password);

   const validUser = this.userList.find((user) => {
    user.name === userName && user.password === password
   } 
  );

      if(validUser){
        console.log('validUser', validUser);
        const sessionId = this.generateSessionId();
        document.cookie = `sessionId=${sessionId}; path=/;`;
        return true
      }
      else{
        return false;
      } 
  }

  logout(): void {
     document.cookie = 'sessionId=; path=/;';
     this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.getSessionId();
  }
  private generateSessionId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private getSessionId(): string | null {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === 'sessionId') {
        return value;
      }
    }
    return null;
  }
}
