import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

currenturl!:string;

  constructor(private router: Router) { 

      this.router.events.subscribe(event=>{
       
        // console.log(this.router.url);
        this.currenturl= this.router.url;
      });

    }

  scrollToSection(sectionId:string) {
    var section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }

}
