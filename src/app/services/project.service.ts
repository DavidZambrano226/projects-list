import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL = 'http://localhost:3000/projects';

  constructor( private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(this.URL);
  }

  getProjectById( id: number ) {
    return this.http.get(`${this.URL}/${id}`);
  }

  saveProject( project: Projects ) {
    project.id = Math.floor(Math.random() * Date.now());  
    return this.http.post(this.URL, project);
  }

  updateProject( project: Projects ) {
    return this.http.put(`${this.URL}/${project.id}`, project);
  }

  deleteProject( id: number ) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
