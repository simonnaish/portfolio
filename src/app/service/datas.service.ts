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
  // projectsParams = new HttpParams().set("columns", "project");
  localUrl = 'assets/datas.json';
  loadProjects(): Observable<project[]> {

    return this.http.get<project[]>(this.localUrl);//, {projectsParams});
    
  }

  loadAbout(): Observable<aboutPiece[]> {
    return this.http.get<aboutPiece[]>(this.localUrl);
  }

}
