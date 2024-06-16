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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
