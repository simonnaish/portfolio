import { Component, OnInit } from '@angular/core';

import { ABOUT } from 'src/db-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pieces = ABOUT;


  constructor() { }

  ngOnInit(): void {
  }

}
