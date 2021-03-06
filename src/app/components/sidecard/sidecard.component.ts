import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-sidecard',
  templateUrl: './sidecard.component.html',
  styleUrls: ['./sidecard.component.scss']
})
export class SidecardComponent implements AfterViewInit {

  overlaid: boolean = false;

  myLinkedin = 'https://www.linkedin.com/in/ruth-ndunge-772080163/';
  myFacebook = 'https://www.facebook.com/ndunge.ruth.1';
  myGithub = 'https://github.com/sparkyruth';

  

  elementSelected: string = '#home';
  currentActive = 0;

  aboutOffset:any = null;
  servicesOffset:any  = null;
  experiencesOffset:any = null;
  hobbyOffset:any = null;
  contactOffset:any = null;

  offset = 300;

  constructor() { }
  FileSaver = require('file-saver');

  ngAfterViewInit(): void {
    this.aboutOffset = (document.querySelector<any>('#about').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.servicesOffset = (document.querySelector<any>('#services').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.experiencesOffset = (document.querySelector<any>('#experiences').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.hobbyOffset = (document.querySelector<any>('#hobby').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.contactOffset = (document.querySelector<any>('#contact').getBoundingClientRect().top + window.pageYOffset) - this.offset;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.servicesOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.servicesOffset && window.pageYOffset < this.experiencesOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.experiencesOffset && window.pageYOffset < this.hobbyOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.hobbyOffset && window.pageYOffset < this.contactOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
 }

  ScrollIntoView(elem: string | any) {
    window.scrollTo(0,elem)
  }

  scrollToTop() {
    window.scroll(0, 0);
    this.elementSelected = '#home';
  }

  onProfileHover() {
    this.overlaid = !this.overlaid;
  }

  onClick(website: string) {
    window.open(website);
  }
  downloadPdf() {
    const pdfUrl = '../../../assets/pdf/Ruth Ndunge muthui-resume.pdf';

    const pdfName = 'resume';
    this.FileSaver.saveAs(pdfUrl, pdfName);
  }
}