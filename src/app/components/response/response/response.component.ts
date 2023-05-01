import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css', '../../../../styles.css']
})
export class ResponseComponent implements OnInit {

  public successFlg: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    if (localStorage.getItem('Success')?.includes('TRUE')) {
      this.successFlg = true;
      localStorage.setItem('Success', 'FALSE');
      localStorage.setItem('Failure', 'FALSE');
    } else if (localStorage.getItem('Failure')?.includes('TRUE')) {
      this.successFlg = false;
      localStorage.setItem('Success', 'FALSE');
      localStorage.setItem('Failure', 'FALSE');
    } else {
      this.successFlg = false;
      localStorage.setItem('Success', 'FALSE');
      localStorage.setItem('Failure', 'FALSE');
    }
  }

}
