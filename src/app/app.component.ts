import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pfs';

  constructor(@Inject(DOCUMENT) private document:Document, private router:Router,private renderer: Renderer2, private elRef: ElementRef){
    
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


    this.renderer.listen('document', 'click', (event: Event) => {
      const clickedElement = event.target as HTMLElement;

      if (!clickedElement.classList.contains('nav-link')) {
        // The clicked element does not have the class '.nav-link'
        // Add your logic here
        console.log('Clicked element does not have .nav-link class');

        const parentButton = this.elRef.nativeElement.querySelector('.servicesLink.active');
        const subMenu = this.elRef.nativeElement.querySelector('.subnav-content.show');
        if(subMenu){
          subMenu.classList.remove('show');
          parentButton.classList.remove('active');
        }
      }else{
        clickedElement.classList.add('active')

          let subMenu = this.document.querySelector('.subnav-content');
          subMenu?.classList.remove('show');
          if(clickedElement.classList.contains('servicesLink')){
           
            subMenu?.classList.add('show');
          }
      }
    });

  }

  removeActive(){
    let elements = this.document.querySelectorAll('.nav-item')

    elements.forEach(el => {
      el.classList.remove('active');
    })
  }

}
