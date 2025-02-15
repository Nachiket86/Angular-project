import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOninit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
