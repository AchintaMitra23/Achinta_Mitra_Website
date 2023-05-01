import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './components/home/home-layout/home-layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { AboutLayoutComponent } from './components/about/about-layout/about-layout.component';
import { ResumeLayoutComponent } from './components/resume/resume-layout/resume-layout.component';
import { SkillLayoutComponent } from './components/skills/skill-layout/skill-layout.component';
import { ProjectLayoutComponent } from './components/projects/project-layout/project-layout.component';
import { ContactLayoutComponent } from './components/contact/contact-layout/contact-layout.component';
import { ResponseComponent } from './components/response/response/response.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeLayoutComponent },
  { path: 'about', component: AboutLayoutComponent },
  { path: 'resume', component: ResumeLayoutComponent },
  { path: 'skills', component: SkillLayoutComponent },
  { path: 'projects', component: ProjectLayoutComponent },
  { path: 'contact', component: ContactLayoutComponent },
  { path: 'response', component: ResponseComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
