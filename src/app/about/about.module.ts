import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [AboutComponent, ArticleComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
