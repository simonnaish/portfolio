import { Component, OnInit } from '@angular/core';
import {MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectLinks: any[];

  constructor() {
    this.projectLinks = [
      {
        avatarLink:'./assets/img/reneegli_logo.png',
        altAvatar:'Rene Egli logo',
        title: 'Material control system.',
        subtitle: 'Python, HTML, CSS',
        description: 'Web application taking care about organising material in company. Handling all operations only by serial number of equipment.',
        hostLink:'http://simonnaish3.pythonanywhere.com/',
        githubLink: 'https://github.com/simonnaish/SailsCounterDjango/tree/master/SailsCounterDjango'
      },
      {
        avatarLink:'./assets/img/flaka.JPG',
        altAvatar:'Flaka logo',
        title: 'Portfolio.',
        subtitle: 'Angular, HTML, CSS, TS',
        description: 'Website contains short information about me, my projects, CV and contact details.',
        hostLink:null,
        githubLink: 'https://github.com/simonnaish/portfolio'
      },
      {
        avatarLink:'./assets/img/reneegli_logo.png',
        altAvatar:'Rene Egli logo',
        title: 'Improved application for windsurfing center.',
        subtitle: 'Angular, Django, DRF, Python, HTML, CSS, TS',
        description: 'Web application taking care about organising material in company. Handling all operations only by serial number of equipment.',
        hostLink:null,
        githubLink: null
      }
    ]

  }

  ngOnInit(): void {
  }

}
