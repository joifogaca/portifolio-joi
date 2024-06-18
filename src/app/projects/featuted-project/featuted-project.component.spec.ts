import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatutedProjectComponent } from './featuted-project.component';
import { NgOptimizedImage } from '@angular/common';
import { TagComponent } from '../tag/tag.component';

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
    component.featuredProject =  {
      id: 1,
      name: "Marvel Angular",
      description: "Uma aplicação Angular que realiza uma busca dinâmica pelos personagens da Marvel.",
      tags: ["Rxjs", "Routing", "Teste Unitário", "ng-bootstrap"],
      url_image: "https://picsum.photos/id/3/200/200",
      link_page: "https://joifogaca.github.io/marvel-angular/heroes",
      link_github: "https://github.com/joifogaca/marvel-angular"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
