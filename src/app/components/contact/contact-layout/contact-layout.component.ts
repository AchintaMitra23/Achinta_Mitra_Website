import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactLayoutService } from '../contact-layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.css', '../../../../styles.css']
})
export class ContactLayoutComponent implements OnInit {

  public formData!: FormGroup;

  constructor(private formBuilder: FormBuilder, private contact: ContactLayoutService, private router: Router) { }

  public ngOnInit(): void {
    this.formData = this.formBuilder.group({
      FullName: new FormControl('', [Validators.required]),
      EmailID: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [Validators.required]),
      Organization: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit(value: any) {
    console.log(value);
    this.contact.postMsg(value).subscribe((response: any) => {
      localStorage.setItem('Success', 'TRUE');
      localStorage.setItem('Failure', 'FALSE');
      console.log('Success');
      // this.router.navigate(['response']);
      location.href = 'https://mailthis.to/confirm';
    }, (error: any) => {
      localStorage.setItem('Success', 'FALSE');
      localStorage.setItem('Failure', 'TRUE');
      // this.router.navigate(['response']);
      console.warn(error.responseText);
      console.log({ error });
    });
  }

}
