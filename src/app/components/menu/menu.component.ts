import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  isMenuShow = false
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
  toggleMenu(){
    console.log('toggle');
    let test = document.getElementsByClassName('navbar-collapse');

    this.isMenuShow = !this.isMenuShow;
    if(this.isMenuShow){
      test.item(0)?.classList.add("show");
    }else{
      test.item(0)?.classList.remove("show");
    }
    
  }

}
