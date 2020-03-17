import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'About',
            link: './',
            index: 0
        }, {
            label: 'Projects',
            link: './projects',
            index: 1
        }, {
            label: 'CV',
            link: './cv',
            index: 2
        }, {
            label: 'Contact',
            link: './contact',
            index: 3
        }
    ];
  }
  
  

}
