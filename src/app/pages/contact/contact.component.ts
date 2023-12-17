import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = new FormControl('');
  company = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  message = new FormControl('');
  verificationCode = new FormControl('');
  capthca = new FormControl('');

  captchaValue = "71CQJX";

  constructor(){

  }

  submit(){
    console.log('submit');
  }
}
