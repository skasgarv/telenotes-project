import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UpdateInfoService {
  updateInfoAPIEndPoint:string="http://devapp.telenotes.com/api/data/skasgarv"
  constructor(private http: HttpClient) { }

  updateInfo (body): Observable<any> {
    let bodyString = JSON.stringify(body);
    return this.http.post(this.updateInfoAPIEndPoint,body)
    .map((response: Response) => {
        response.json();
    })
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
