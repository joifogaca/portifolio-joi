import { FeaturedProject } from './../featuted-project/featured-projects.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../projects.service';
import { FeatutedProjectComponent } from '../featuted-project/featuted-project.component';
import { SimpleProjectsComponent } from '../simple-projects/simple-projects.component';
import { of } from 'rxjs';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectServiceSpy: jasmine.SpyObj<ProjectsService>;
  beforeEach(async () => {
    projectServiceSpy = jasmine.createSpyObj<ProjectsService>('ProjectsService', {
      getFeaturedProjects: of([]),
      getSimpleProjects: of([]),
    });
    await TestBed.configureTestingModule({
      imports: [

      ],
      providers: [
        { provide: ProjectsService, useValue: projectServiceSpy }
      ],
      declarations: [ ProjectsComponent,
        FeatutedProjectComponent,
        SimpleProjectsComponent
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
