import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css']
})
export class AppComponent {
  public title: string = 'Achinta_Mitra_Website';
  @ViewChild('myNav') public myNav!: ElementRef;

  public openNav() {
    this.myNav.nativeElement.style.width = '25%';
  }

  public closeNav() {
    this.myNav.nativeElement.style.width = '0%';
  }
}
