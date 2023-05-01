import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css', '../../../../styles.css']
})
export class HomeLayoutComponent implements OnInit {

  public roles: any[] = ['Software Engineer', 'Full Stack Developer', 'AI Enthusiast', 'Content Creator', 'Freelancer'];

  constructor() { }

  public ngOnInit(): void {

  }

}
