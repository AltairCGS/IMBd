import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './header/menu/menu.component';
import { LinksComponent } from './header/menu/links/links.component';
import { BsMenuComponent } from './header/bs-menu/bs-menu.component';
import { MenuSidebarComponent } from './header/menu-sidebar/menu-sidebar.component';
import { AccordionMenuComponent } from './header/menu-sidebar/accordion-menu/accordion-menu.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MainComponent } from './main/main.component';
import { SectionMoviesComponent } from './main/section-movies/section-movies.component';
import { CardMoviesComponent } from './main/section-movies/card-movies/card-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LinksComponent,
    BsMenuComponent,
    MenuSidebarComponent,
    AccordionMenuComponent,
    MoviesComponent,
    MainComponent,
    SectionMoviesComponent,
    CardMoviesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CarouselModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
