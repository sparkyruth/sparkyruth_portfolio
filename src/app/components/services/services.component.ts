import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  toggleMessage: string = "Show More";
  isCollapsed:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow() {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.toggleMessage = "Show More";
    }
    else{
      this.toggleMessage = "Show Less";
    }
  }

}
