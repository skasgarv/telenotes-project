import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DeleteInfoService {
  deleteInfoAPIEndPoint:string="http://devapp.telenotes.com/api/data/skasgarv/"
  constructor(private http: Http) {
  }

  deleteInfo (CompanyID: number): Observable<any> {
    return this.http.delete(this.deleteInfoAPIEndPoint + CompanyID)
      .map((res:Response) => {
        console.log("Response", res)
        res.json()
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
