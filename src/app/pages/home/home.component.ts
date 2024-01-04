import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  envPath:any;
  constructor(private router: Router){

  }

  ngOnInit(): void {
    if(environment.baseImageurl ==''){
      this.envPath = "../../assets";
    }else{
      this.envPath = "../assets"
    }
  }

  readmore(){
    this.router.navigateByUrl('/about-us');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
