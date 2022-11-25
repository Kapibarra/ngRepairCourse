import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './homepage/mainpage/mainpage.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { AboutComponent } from './homepage/shared/components/about/about.component';
import { AdvantagesComponent } from './homepage/shared/components/advantages/advantages.component';
import { PriceComponent } from './homepage/shared/components/price/price.component';
import { FirstLessonComponent } from './homepage/shared/components/first-lesson/first-lesson.component';
import { GalleryComponent } from './homepage/shared/components/gallery/gallery.component';
import { MarketComponent } from './homepage/shared/components/market/market.component';
import { ContactsComponent } from './homepage/shared/components/contacts/contacts.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { BurgerComponent } from './homepage/shared/components/burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeroComponent,
    AboutComponent,
    AdvantagesComponent,
    PriceComponent,
    FirstLessonComponent,
    GalleryComponent,
    MarketComponent,
    ContactsComponent,
    HeaderComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
