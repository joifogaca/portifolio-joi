import { simpleProjectMock } from './../projects.mock';
import { FeaturedProject } from './../featuted-project/featured-projects.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../projects.service';
import { FeatutedProjectComponent } from '../featuted-project/featuted-project.component';
import { SimpleProjectsComponent } from '../simple-projects/simple-projects.component';
import { of } from 'rxjs';
import { featuredProjectMock } from '../projects.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectServiceSpy: jasmine.SpyObj<ProjectsService>;
  beforeEach(async () => {
    projectServiceSpy = jasmine.createSpyObj<ProjectsService>('ProjectsService', {
      getFeaturedProjects: of(featuredProjectMock),
      getSimpleProjects: of(simpleProjectMock),
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
       ],
       schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create and call ProjectsService', () => {
    projectServiceSpy.getFeaturedProjects.and.returnValue(of(featuredProjectMock));
    projectServiceSpy.getSimpleProjects.and.returnValue(of(simpleProjectMock));
    // will trigger ngOnInit
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.featuredProjects$?.subscribe(result => {
      expect(result).toEqual(featuredProjectMock);
    });

    component.simpleProjects$?.subscribe(result => {
      expect(result).toEqual(simpleProjectMock);
    });
  });
});
