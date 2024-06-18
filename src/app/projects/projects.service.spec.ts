import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { featuredProjectMock, simpleProjectMock } from './projects.mock';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpTestingController: HttpTestingController;
  const API = 'https://6657bb375c3617052645b929.mockapi.io/api/portifolio';
  const API_FEATURED = `${API}/featured-projects`;
  const API_SIMPLE = `${API}/simple-projects`;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(ProjectsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list all Featured Projects', () => {
    service.getFeaturedProjects().subscribe(projects => {
      expect(projects).toBeTruthy();
      expect(projects.length).toBe(featuredProjectMock.length);
    });

    const req = httpTestingController.expectOne(API_FEATURED);
    expect(req.request.method).toEqual('GET');
    req.flush(featuredProjectMock);
  });

  it('should list all Simple Projects', () => {
    service.getSimpleProjects().subscribe(projects => {
      expect(projects).toBeTruthy();
      expect(projects.length).toBe(simpleProjectMock.length);
    });

    const req = httpTestingController.expectOne(API_SIMPLE);
    expect(req.request.method).toEqual('GET');
    req.flush(featuredProjectMock);
  });

});
