import { Component, OnInit } from '@angular/core';
import { Const } from 'src/app/models/constants';
import { Certificate, Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.css', '../../../../styles.css']
})
export class ProjectLayoutComponent implements OnInit {

  public projects: Project[] = [];
  public tempProjects: Project[] = [];
  public certificates: Certificate[] = [];

  constructor(private constant: Const) { }

  public ngOnInit(): void {
    this.constant.projList.forEach((project) => {
      this.projects.push(project);
    });
    this.tempProjects = this.projects;
    this.constant.certList.forEach((certificate) => {
      this.certificates.push(certificate);
    });
  }

  public filterProj(mode: string) {
    if (mode === 'ALL') {
      this.tempProjects = this.projects;
    } else {
      this.tempProjects = [];
      for (let project of this.projects) {
        if (project.domain === mode) {
          this.tempProjects.push(project);
        }
      }
    }
  }
}
