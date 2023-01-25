import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
