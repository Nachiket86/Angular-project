import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoUserServiceService } from '../../../services/demo-user-service.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signUpForm!: FormGroup;
  userService: DemoUserServiceService = inject(DemoUserServiceService);

  constructor(private FormBuilder: FormBuilder){
  }

  ngOnInit(){
    this.signUpForm = this.FormBuilder.group({
      userName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    });
  }

  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);

      const userList: User  = {
        id: this.userService.userList.length + 1,
        name: this.signUpForm.value.userName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      }
      this.userService.userList.push(userList);
      console.log(this.userService.userList);
    }
  }
}
