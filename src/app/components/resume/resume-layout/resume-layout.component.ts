import { Component, OnInit } from '@angular/core';
import { Const } from 'src/app/models/constants';
import { Education, Experience, Specs, Standard } from 'src/app/models/resume';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.css', '../../../../styles.css']
})
export class ResumeLayoutComponent implements OnInit {

  public experiences: Experience[] = [];
  public educations: Education[] = [];
  public roleSet: any[] = [];
  public activitiesList: any[] = [];

  public expCols: any[] = ['Skills', 'Roles'];
  public eduCols: any[] = ['Board - Percentage', 'Activities'];

  public companyNames: any[] = ['EPAM Systems, Kolkata', 'Capgemini Technology Services, Hyderabad'];
  public institutionNames: any[] = ['The Scottish Church Collegiate School, Kolkata', 'Bengal Institute of Technology, Kolkata'];

  public skillSet: any[] = [
    'JAVA EE, Spring Boot, API & Microservices, Spring MVC, Angular, Javascript, HTML & CSS, AWS, Maria DB, Jenkins, JIRA, PCF, Maven, Node.js.',
    'JAVA EE, Spring Boot, API & Microservices, Spring MVC, Angular, Javascript, HTML & CSS, MySQL, Maven, Node.js.',
    'JAVA EE, Design Pattern, Javascript, HTML & CSS, JAVA Networking.',
  ];

  constructor(private constant: Const) { }

  public ngOnInit(): void {
    this.constant.responsibilities.forEach((response) => {
      this.roleSet.push(response);
    });
    this.constant.activities.forEach((response) => {
      this.activitiesList.push(response);
    })
    this.prepareExperienceSection();
    this.prepareEducationSection();
  }

  public prepareEducationSection() {
    let capgSpecs: Specs[] = [];
    capgSpecs.push(
      new Specs().prepareSpecs('Senior Software Engineer (April 2023 - PRESENT)', this.skillSet[0], this.roleSet[0]),
      new Specs().prepareSpecs('Software Engineer (September 2021 - March 2023)', this.skillSet[0], this.roleSet[0]),
      new Specs().prepareSpecs('Full Stack Intern (May 2021 - August 2021)', this.skillSet[1], this.roleSet[1])
    );
    this.experiences.push(new Experience().preprareExperienceModel(this.companyNames[1], capgSpecs));

    let epmSpecs: Specs[] = [];
    epmSpecs.push(
      new Specs().prepareSpecs('Internship (January 2020 - June 2020)', this.skillSet[2], this.roleSet[2])
    );
    this.experiences.push(new Experience().preprareExperienceModel(this.companyNames[0], epmSpecs));
  }

  public prepareExperienceSection() {
    let bitSpecs: Standard[] = [];
    bitSpecs.push(
      new Standard().prepareStandard('B.TECH in Information Technology (2017 - 2021)', 'M.A.K.A.U.T - 9.46 CGPA', this.activitiesList[0])
    );
    this.educations.push(new Education().prepareEducationModel(this.institutionNames[1], bitSpecs));

    let sccsSpecs: Standard[] = [];
    sccsSpecs.push(
      new Standard().prepareStandard('Higher Secondary Education (2015 - 2017)', 'W.B.C.H.S.E - 73.60 %', this.activitiesList[1]),
      new Standard().prepareStandard('Secondary Education (2004 - 2015)', 'W.B.B.S.E - 78.88 %', this.activitiesList[1])
    );
    this.educations.push(new Education().prepareEducationModel(this.institutionNames[0], sccsSpecs));
  }

}
