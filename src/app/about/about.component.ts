import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {DatasService} from '../service/datas.service';

import {aboutPiece} from 'src/models/aboutPiece';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pieces$: Observable<aboutPiece[]>


  constructor(private listOfAbout: DatasService) { }

  ngOnInit(): void {
    this.pieces$=this.listOfAbout.loadAbout();
  }

}
