import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeaturedProject } from './featuted-project/featured-projects.model';
import { SimpleProject } from './simple-projects/simple-projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly apiBaseUrl = ' http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getFeaturedProjects() {
    return this.http.get<FeaturedProject[]>(`${this.apiBaseUrl}/featured-projects`);
  }

  public getSimpleProjects() {
    return this.http.get<SimpleProject[]>(`${this.apiBaseUrl}/simple-projects`);
  }
}
