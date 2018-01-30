import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UpdateInfoService {
  createInfoAPIEndPoint:string="http://devapp.telenotes.com/api/data/skasgarv"
  constructor(private http: HttpClient) { }

  updateInfo (body): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json');

    let bodyString = JSON.stringify(body);
    console.log("Headers =", headers);
    return this.http.post(this.createInfoAPIEndPoint,bodyString, {
      headers: new HttpHeaders().delete('Access-Control-Request-Headers'),
    }).map((response: Response) => {
        response.json();
    })
  }
}
