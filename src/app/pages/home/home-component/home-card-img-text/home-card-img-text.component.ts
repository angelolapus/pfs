import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-home-card-img-text',
  templateUrl: './home-card-img-text.component.html',
  styleUrl: './home-card-img-text.component.scss'
})
export class HomeCardImgTextComponent implements OnInit{
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