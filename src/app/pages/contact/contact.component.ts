import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  company = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);
  phone = new FormControl('',[Validators.required]);
  message = new FormControl('',[Validators.required]);
  verificationCode = new FormControl('',[Validators.required]);
  capthca = new FormControl('');

  captchaValue = "";

  constructor(){

  }

  ngOnInit(): void {
    this.captchaValue = this.rotateCaptcha(6);
  }

  rotateCaptcha(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  submit(){
    this.name.valid;
    console.log(this.name.valid);
  //  this.sendMessage();
    
  }

  sendMessage(){
    let message = this.message.value 
    + "\nName: " + this.name.value
    + "\nCompany: " + this.company.value
    + "\nEmail: " + this.email.value
    + "\nPhone: " + this.phone.value
    window.location.href = "mailto:angelolapus@gmail.com?subject=Inquiry&body="+ encodeURIComponent(message);
  }
}