import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
  myLinkedin = 'https://www.linkedin.com/in/ruth-ndunge-772080163/';
  myFacebook = 'https://www.facebook.com/ndunge.ruth.1';
  myGithub = 'https://github.com/sparkyruth';
  // myEmail = 'ndunge2ruth101@gmail.com'

  onClick(website: string) {
    window.open(website);
  }
}