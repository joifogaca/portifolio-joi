import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedProject } from '../featuted-project/featured-projects.model';
import { ProjectsService } from '../projects.service';
import { SimpleProject } from '../simple-projects/simple-projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  featuredProjects$: Observable<FeaturedProject[]> | null = null;
  simpleProjects$: Observable<SimpleProject[]> | null = null;

  constructor(private projectservice: ProjectsService) {
    this.featuredProjects$ = projectservice.getFeaturedProjects();
    this.simpleProjects$ = projectservice.getSimpleProjects();
  }
}
