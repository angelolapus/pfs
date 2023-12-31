import { Component, OnInit,} from '@angular/core';
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

  changePage(){
    let nav = document.getElementsByClassName('navbar-collapse');
    // let navCol = document.getElementsByClassName('navbar-collapse');
    // navCol.item(0)?.classList.toggle("show");
    this.isMenuShow = !this.isMenuShow;
    nav.item(0)?.classList.remove("show");
    nav.item(0)?.classList.add("hidden");
    
  }

}
