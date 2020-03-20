import { Component, OnInit} from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import {MatCardModule } from '@angular/material/card';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

import {PROJECTS} from 'src/db-data';
import {project} from 'src/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  @ViewChild('container') clicker: ElementRef;
  
  title='projects'
  projectLinks=PROJECTS;

  constructor() {

  }

  checkStyle(link:project){
    return link.category;
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.clicker.nativeElement.click();
      }, 1);
    
   
  }

}
