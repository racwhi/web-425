import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent }
];
