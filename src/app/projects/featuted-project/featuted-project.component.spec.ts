import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatutedProjectComponent } from './featuted-project.component';

describe('FeatutedProjectComponent', () => {
  let component: FeatutedProjectComponent;
  let fixture: ComponentFixture<FeatutedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatutedProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatutedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
