import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    let nav = document.getElementsByClassName('navbar-collapse');

    this.isMenuShow = !this.isMenuShow;
    if(this.isMenuShow){
      nav.item(0)?.classList.add("show");
      nav.item(0)?.classList.remove("hidden");
    }else{
      nav.item(0)?.classList.remove("show");
      nav.item(0)?.classList.add("hidden");
    }
    
  }

  changePage(_name:string){
    let nav = document.getElementsByClassName('navbar-collapse');
    nav.item(0)?.classList.toggle("show");
    this.isMenuShow = !this.isMenuShow;

    
    if(document.body.classList.contains("home")){
      document.body.classList.remove("home");
    }else if (document.body.classList.contains("otherPage")){
      document.body.classList.remove("otherPage");
    }

    document.body.classList.add(_name);
  }

}
