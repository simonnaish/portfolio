import { Component, OnInit, Input } from '@angular/core';

import { aboutPiece } from 'src/models/aboutPiece';

@Component({
  selector: 'app-about-piece',
  templateUrl: './about-piece.component.html',
  styleUrls: ['./about-piece.component.scss']
})
export class AboutPieceComponent implements OnInit {

  @Input()
  piece: aboutPiece;

  constructor() { }

  ngOnInit(): void {
  }

}
