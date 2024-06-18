import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProjectsComponent } from './simple-projects.component';
import { simpleProjectMock } from '../projects.mock';

describe('SimpleProjectsComponent', () => {
  let component: SimpleProjectsComponent;
  let fixture: ComponentFixture<SimpleProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleProjectsComponent);
    component = fixture.componentInstance;
    component.simpleProject =  simpleProjectMock[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render info card correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('.simple-project');
    expect(card.textContent).toContain(component.simpleProject.name);
    expect(card.textContent).toContain(component.simpleProject.description);
  });

});
