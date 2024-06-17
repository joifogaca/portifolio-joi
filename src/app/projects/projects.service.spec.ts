import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
