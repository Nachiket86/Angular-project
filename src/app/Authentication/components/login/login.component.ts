import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../Authentication/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../../../Authentication/services/signin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  errorMessage: string = '';
  loginForm!: FormGroup;
  hidePassword: boolean = true;
  userList: User[] = [];

  // new way
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  signInService: SigninService = inject(SigninService);

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ],]
    });

    // this.signInService.getUsers().subscribe((users) => {
    //   this.userList  = users;
    // })
  }

  

  onLogin(){
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log('userName', userName, 'password', password);

    const userLoggedIn = this.authService.login(userName, password);

    if(userLoggedIn){
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid user name or password';
    }
  }
}
