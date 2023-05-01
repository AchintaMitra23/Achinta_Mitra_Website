import { Component, OnInit } from '@angular/core';
import { BioData } from 'src/app/models/about';
import { Const } from 'src/app/models/constants';

@Component({
  selector: 'app-about-layout',
  templateUrl: './about-layout.component.html',
  styleUrls: ['./about-layout.component.css', '../../../../styles.css']
})
export class AboutLayoutComponent implements OnInit {

  public about: any = {
    number: 0,
    title: '',
  };
  public aboutList: any[] = [];

  public bioDatas: any[] = [];
  public yrsOfExp: number = new Date().getFullYear() - 2022;

  constructor(private constant: Const) { }

  public ngOnInit(): void {

    for (let i = 0; i < this.constant.bioDataTitles.length; i++) {
      this.bioDatas.push(new BioData().prepareDesc(this.constant.bioDataTitles[i], this.constant.bioDataDescs[i]));
    }

    this.aboutList.push({
      number: this.constant.projList.length < 10 ? '0' + this.constant.projList.length + ' + ' : this.constant.projList.length + ' + ',
      title: 'No. of Projects Done'
    });
    this.aboutList.push({
      number: (this.constant.progSkills.length + this.constant.subjectSkills.length) < 10 ? '0' + (this.constant.progSkills.length + this.constant.subjectSkills.length) + ' + ' : (this.constant.progSkills.length + this.constant.subjectSkills.length) + ' + ',
      title: 'No. of Skills Known'
    });
    this.aboutList.push({
      number: (new Date().getFullYear() - 2021) < 10 ? '0' + (new Date().getFullYear() - 2021) + ' + ' : (new Date().getFullYear() - 2021) + ' + ',
      title: 'Years of Work Exp.'
    });
    this.aboutList.push({
      number: this.constant.certList.length < 10 ? '0' + this.constant.certList.length + ' + ' : this.constant.certList.length + ' + ',
      title: 'Total Certifications Done'
    });
  }

}
