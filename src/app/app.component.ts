import { Component } from '@angular/core';
import {Router} from '@angular/router';



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
            index: 0,
            detail:'Show information about me...'
        }, {
            label: 'Projects',
            link: './projects',
            index: 1,
            detail:'Show my recent projects...'
        }, {
            label: 'CV',
            link: './cv',
            index: 2,
            detail:'Show my curriculum vitae...'
        }, {
            label: 'Contact',
            link: './contact',
            index: 3,
            detail:'Show my contact details...'
        }
    ];
  }
  
  

}
