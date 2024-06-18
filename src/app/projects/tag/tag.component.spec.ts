import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;
  let tagName: string;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    tagName = "Rxjs"
    component.tag = tagName;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render info correctly', () => {
    const tag: HTMLElement = fixture.nativeElement.querySelector('.tag');
    expect(tag.textContent).toContain(component.tag);
  });

});
