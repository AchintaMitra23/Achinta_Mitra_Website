import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './components/home/home-layout/home-layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutLayoutComponent } from './components/about/about-layout/about-layout.component';
import { ContactLayoutComponent } from './components/contact/contact-layout/contact-layout.component';
import { ProjectLayoutComponent } from './components/projects/project-layout/project-layout.component';
import { ResumeLayoutComponent } from './components/resume/resume-layout/resume-layout.component';
import { SkillLayoutComponent } from './components/skills/skill-layout/skill-layout.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Const } from './models/constants';
import { ModalViewComponent } from './common/modal-view/modal-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactLayoutService } from './components/contact/contact-layout.service';
import { ResponseComponent } from './components/response/response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    PageNotFoundComponent,
    AboutLayoutComponent,
    ContactLayoutComponent,
    ProjectLayoutComponent,
    ResumeLayoutComponent,
    SkillLayoutComponent,
    ModalViewComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Const, ContactLayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
