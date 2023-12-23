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
          
        console.log(event.url);
        if(event.url == '/home' || event.url == '/'){
          this.document.body.classList.add("home");
          this.document.body.classList.remove("otherPage");
        }else{
          this.document.body.classList.remove("home");
          this.document.body.classList.add("otherPage")
        }
      });
  }

}
