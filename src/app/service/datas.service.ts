import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { project } from 'src/models/project';
import { aboutPiece } from 'src/models/aboutPiece';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})


export class DatasService {

  constructor(private http: HttpClient) {

  }

  localUrl = 'assets/datas/';

  //GET from projects.component
  loadProjects(): Observable<project[]> {

    return this.http.get<project[]>(this.localUrl + 'projectData.json');

  }
  //GET from about.component
  loadAbout(): Observable<aboutPiece[]> {
    return this.http.get<aboutPiece[]>(this.localUrl + 'aboutData.json');
  }


  //POST from Contact.component.
  sendEmail(content:string){
    
  }
}
