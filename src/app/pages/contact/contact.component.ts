import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  name = new FormControl('', [Validators.required]);
  company = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);
  phone = new FormControl('',[Validators.required]);
  message = new FormControl('',[Validators.required]);
  verificationCode = new FormControl('',[Validators.required]);
  capthca = new FormControl('');

  captchaValue = "";

  phoneEmailRegex = /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/;
  formError = false;
  constructor(fb:FormBuilder){
    this.captchaValue = this.rotateCaptcha(6);
    this.contactForm = fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      company: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.phoneEmailRegex),
        ]),
      ],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.phoneEmailRegex),
        ]),
      ],
      message: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      verificationCode: [
        null,
        Validators.compose([
          Validators.required,
          this.stringEqualityValidator(this.captchaValue)
        ]),
      ]
    });
  
  }

  ngOnInit(): void {
    
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
    if(this.contactForm.valid){
      
      this.formError = false;
      this.sendMessage();
      this.reset();
    }else{
      this.formError = true;
    }
    
    
  }

  sendMessage(){
    let message = "\nMessage: " + this.contactForm.controls['message'].value 
    + "\nName: " + this.contactForm.controls['name'].value
    + "\nCompany: " + this.contactForm.controls['company'].value
    + "\nEmail: " + this.contactForm.controls['email'].value
    + "\nPhone: " + this.contactForm.controls['phone'].value
    window.location.href = "mailto:contactme@pfspl.com.sg,xianyong.lim@pfspl.com.sg?subject=Inquiry&body="+ encodeURIComponent(message);
  }

  reset(){
    this.contactForm.reset();
  }

  stringEqualityValidator(targetString: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value !== targetString) {
        return { stringEquality: true };
      }
      return null;
    };
  }
}