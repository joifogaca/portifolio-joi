import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').
    then(m => m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
