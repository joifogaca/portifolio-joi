import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatutedProjectComponent } from './featuted-project.component';
import { NgOptimizedImage } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
import { featuredProjectMock } from '../projects.mock';

describe('FeatutedProjectComponent', () => {
  let component: FeatutedProjectComponent;
  let fixture: ComponentFixture<FeatutedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatutedProjectComponent,
        TagComponent
       ],
      imports: [NgOptimizedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatutedProjectComponent);
    component = fixture.componentInstance;
    component.featuredProject = featuredProjectMock[0];
    fixture.detectChanges();
  });

  it('should render info card correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('.featuted-project');
    expect(card.textContent).toContain(component.featuredProject.name);
    expect(card.textContent).toContain(component.featuredProject.description);
  });
});
