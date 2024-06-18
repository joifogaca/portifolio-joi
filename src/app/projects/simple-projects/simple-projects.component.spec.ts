import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProjectsComponent } from './simple-projects.component';

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
    component.simpleProject =  {
      id: 1,
        name: "Olho Vivo",
        description: "Projeto em andamento, para estudo de uma API desenvolvida em .NET CORE",
        link_github: "https://github.com/joifogaca/OlhoVivo"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
