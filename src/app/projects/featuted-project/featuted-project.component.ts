import { Component, Input } from '@angular/core';
import { FeaturedProject } from './featured-projects.model';

@Component({
  selector: 'app-featuted-project',
  templateUrl: './featuted-project.component.html',
  styleUrls: ['./featuted-project.component.scss']
})
export class FeatutedProjectComponent {

  @Input() featuredProject!: FeaturedProject;
}
