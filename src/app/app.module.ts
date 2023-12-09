import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeBannerComponent } from './pages/home/home-component/home-banner/home-banner.component';
import { HomeBannerNavComponent } from './pages/home/home-component/home-banner-nav/home-banner-nav.component';
import { HomeCardTextComponent } from './pages/home/home-component/home-card-text/home-card-text.component';
import { HomeCardImgTextComponent } from './pages/home/home-component/home-card-img-text/home-card-img-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeBannerComponent,
    HomeBannerNavComponent,
    HomeCardTextComponent,
    HomeCardImgTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
