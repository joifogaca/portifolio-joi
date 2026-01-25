import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeaturedProject } from './featuted-project/featured-projects.model';
import { SimpleProject } from './simple-projects/simple-projects.model';
import { Article } from '../about/article/article.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly apiBaseUrl = 'https://6657bb375c3617052645b929.mockapi.io/api/portifolio';

  constructor(private http: HttpClient) { }

  public getFeaturedProjects() {
    return this.http.get<FeaturedProject[]>(`${this.apiBaseUrl}/featured-projects`);
  }

  public getSimpleProjects() {
    return this.http.get<SimpleProject[]>(`${this.apiBaseUrl}/simple-projects`);
  }

  public getArticles() {
    return this.http.get<Article[]>(`${this.apiBaseUrl}/articles`);
  }
}
