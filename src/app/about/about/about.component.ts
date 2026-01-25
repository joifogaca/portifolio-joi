import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/projects/projects.service';
import { Article } from '../article/article.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  articles$: Observable<Article[]> | null = null;
   constructor(private projectservice: ProjectsService) {
      this.articles$ = projectservice.getArticles();

    }

}
