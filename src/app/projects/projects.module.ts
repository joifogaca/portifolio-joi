import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { FeatutedProjectComponent } from './featuted-project/featuted-project.component';
import { TagComponent } from './tag/tag.component';
import { ProjectsService } from './projects.service';
import { SimpleProjectsComponent } from './simple-projects/simple-projects.component';




@NgModule({
  declarations: [
    ProjectsComponent,
    FeatutedProjectComponent,
    TagComponent,
    SimpleProjectsComponent
  ],
  providers: [ProjectsService],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NgOptimizedImage
  ]
})
export class ProjectsModule { }
