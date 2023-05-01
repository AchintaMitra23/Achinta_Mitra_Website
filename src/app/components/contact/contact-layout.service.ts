import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLayoutService {

  private api = 'https://mailthis.to/achintamitra23@gmail.com';

  constructor(private http: HttpClient) { }

  public postMsg(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      },
      (error: any) => {
        return error;
      }
      )
    );
  }
}
