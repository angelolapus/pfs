import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  envPath:any;
  constructor(private router:Router){

  }

  ngOnInit(): void {
    if(environment.baseImageurl ==''){
      this.envPath = "../../assets";
    }else{
      this.envPath = "../assets"
    }
  } 

  navigateFooter(val:string){
    if(val =="quality"){
      this.router.navigateByUrl('/quality-and-policies');
    }else{
      this.router.navigateByUrl('/careers');
    }
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
