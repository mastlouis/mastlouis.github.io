import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { LostComponent } from './lost/lost.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'projects', component: ProjectsComponent },
  // { path: '**', component: LostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
