import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoUserServiceService } from '../../../services/demo-user-service.service';
import { User } from '../../models/user.model';
import { SigninService } from '../../../Authentication/services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  hidePassword: boolean = true
  signUpForm!: FormGroup;
  userService: DemoUserServiceService = inject(DemoUserServiceService);
  signInService: SigninService = inject(SigninService);
  router: Router = inject(Router);
  userList: User[] = [];

  constructor(private FormBuilder: FormBuilder){
  }

  ngOnInit(){
    this.signUpForm = this.FormBuilder.group({
      userName: ['',Validators.required],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ],],
      confirmPassword: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ],],
      email: ['',[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-z]+\\.+[a-zA-Z]{2,6}'),
      ]],
    });

    // this.signInService.getUsers().subscribe((users) => {
    //   this.userList = users;
    //   console.log(this.userList);
    // })
  }

  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);

      const userList: User  = {
        id: this.userList.length + 1,
        name: this.signUpForm.value.userName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      }
      // this.userService.userList.push(userList);

      this.signInService.addUserAfterSignIn(userList).subscribe((user) => {
        console.log(user);
        if(user){
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
