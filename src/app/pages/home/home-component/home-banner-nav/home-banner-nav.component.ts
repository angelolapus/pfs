import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-home-banner-nav',
  templateUrl: './home-banner-nav.component.html',
  styleUrl: './home-banner-nav.component.scss'
})
export class HomeBannerNavComponent  implements OnInit{
  envPath:any;
  constructor(){

  }

  ngOnInit(): void {
    if(environment.baseImageurl ==''){
      this.envPath = "../../assets";
    }else{
      this.envPath = "../assets"
    }
  }
}