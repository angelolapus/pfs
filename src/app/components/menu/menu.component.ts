import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isMenuShow = false
  constructor(){

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
