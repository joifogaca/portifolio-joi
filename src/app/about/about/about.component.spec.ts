import { ArticleComponent } from './../article/article.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { ProjectsService } from 'src/app/projects/projects.service';
import { of } from 'rxjs';
import { ARTICLES_MOCKS } from '../ARTICLES-MOCK';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let projectServiceSpy: jasmine.SpyObj<ProjectsService>;
    beforeEach(async () => {
      projectServiceSpy = jasmine.createSpyObj<ProjectsService>('ProjectsService', {
        getArticles: of(ARTICLES_MOCKS)
      });});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent, ArticleComponent ],
       providers: [
              { provide: ProjectsService, useValue: projectServiceSpy }
            ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
