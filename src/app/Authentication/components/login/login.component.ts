import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  errorMessage: string = '';
  loginForm!: FormGroup;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  constructor(private formBuilder: FormBuilder){}

  onLogin(){
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log('userName', userName, 'password', password);

    const userLoggedIn = this.authService.login(userName, password);

    if(userLoggedIn !== undefined){
      this.router.navigate(['/home']);
      
    } else {
      this.errorMessage = 'Invalid user name or password';
    }
  }
}
