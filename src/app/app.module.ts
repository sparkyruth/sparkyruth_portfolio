import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { HomeComponent } from './components/home/home.component';
import { MobilenavComponent } from './components/mobilenav/mobilenav.component';
import { SidecardComponent } from './components/sidecard/sidecard.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './components/services/services.component';
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { TechComponent } from './tech/tech.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperiencesComponent,
    HobbyComponent,
    HomeComponent,
    MobilenavComponent,
    SidecardComponent,
    ServicesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [SpotifyService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
