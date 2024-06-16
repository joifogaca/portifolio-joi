import { SimpleProject } from './simple-projects.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-projects',
  templateUrl: './simple-projects.component.html',
  styleUrls: ['./simple-projects.component.scss']
})
export class SimpleProjectsComponent {

  @Input() simpleProject!: SimpleProject;
}
