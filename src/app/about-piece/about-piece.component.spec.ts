import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPieceComponent } from './about-piece.component';

describe('AboutPieceComponent', () => {
  let component: AboutPieceComponent;
  let fixture: ComponentFixture<AboutPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPieceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
