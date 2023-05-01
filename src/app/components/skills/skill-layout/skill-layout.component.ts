import { Component, OnInit } from '@angular/core';
import { Const } from 'src/app/models/constants';
import { ProgSkills, Subjects, Technologies } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-layout',
  templateUrl: './skill-layout.component.html',
  styleUrls: ['./skill-layout.component.css', '../../../../styles.css']
})
export class SkillLayoutComponent implements OnInit {

  public programSkills: ProgSkills[] = [];
  public subjects: Subjects[] = [];
  public techs: Technologies[] = [];

  public techName: string = '';
  public noOfProj: number = 0;
  public yrsOfExp: number = 0;

  constructor(private constant: Const) { }

  public ngOnInit(): void {
    this.setProgrammingSkills();
    this.setSubjectSkills();
    this.setTechSkills();
  }

  public setProgrammingSkills() {
    for (let i = 0; i < this.constant.progSkills.length; i++) {
      this.programSkills.push(new ProgSkills().preprareProgSkills(this.constant.progSkills[i], this.constant.progSkillsRtng[i]));
    }
  }

  public setSubjectSkills() {
    for (let i = 0; i < this.constant.subjectSkills.length; i++) {
      this.subjects.push(new Subjects().preprareSubjects(this.constant.subjectSkills[i], this.constant.subjectSkillRtng[i]));
    }
  }

  public setTechSkills() {
    for (let i = 0; i < this.constant.techSkills.length; i++) {
      this.techs.push(new Technologies().preprareTechs(this.constant.techSkills[i], this.constant.projectsDone[i], (new Date()).getFullYear() - this.constant.techStartYr[i]));
    }
  }

  public onSelect(item: Technologies) {
    this.techName = item.techName;
    this.noOfProj = item.noOfProjDone;
    this.yrsOfExp = item.totalExp;
  }

  public onClose() {
    this.techName = '';
    this.noOfProj = 0;
    this.yrsOfExp = 0;
  }

}
