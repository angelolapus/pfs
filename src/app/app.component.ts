import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pfs';

  constructor(@Inject(DOCUMENT) private document:Document, private router:Router){
    
  }

  ngOnInit(){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event:any) => 
      {
        if(event.url == '/home' || event.url == '/'){
          this.document.body.classList.add("home");
          this.document.body.classList.remove("otherPage");
        }else{
          this.document.body.classList.remove("home");
          this.document.body.classList.add("otherPage")
        }
        this.removeActive();
        if(event.url == '/about-us'){
          let element = this.document.querySelector('.aboutusLink');
          element?.classList.add('active');
        }else  if(event.url == '/contact-us'){
          let element = this.document.querySelector('.contactLink');
          element?.classList.add('active');
        }
      }
    );


      let elements = this.document.querySelectorAll('.nav-link')

      elements.forEach(el => {
        el.addEventListener('click', () => {
          elements.forEach(el => el.classList.remove('active'))
          el.classList.add('active')

          let subMenu = this.document.querySelector('.subnav-content');
          subMenu?.classList.remove('show');
          if(el.classList.contains('servicesLink')){
           
            subMenu?.classList.add('show');
          }
        });
      })
  }

  removeActive(){
    let elements = this.document.querySelectorAll('.nav-item')

    elements.forEach(el => {
      el.classList.remove('active');
    })
  }

}
