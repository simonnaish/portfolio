import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import {MatGridList} from '@angular/material/grid-list';


import { PROJECTS } from 'src/db-data';
import { project } from 'src/models/project';
import { Observable } from 'rxjs';
import { DatasService } from '../service/datas.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  @ViewChild('container', {static: false}) clicker: ElementRef;

  title = 'projects'
  // projectLinks = PROJECTS;

  projects$ : Observable<project[]>;

  constructor(private listOfProjects:DatasService) {
    
  }

  checkStyle(link: project) {
    return link.category;
  }

  
  ngOnInit(): void {
    this.projects$=this.listOfProjects.loadProjects();

    //testing
    this.projects$.forEach(t=>console.log(t));
  }


}