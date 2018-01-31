import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreateInfoService {
  createInfoAPIEndPoint:string="http://devapp.telenotes.com/api/data/skasgarv"
  constructor(private httpPut: HttpClient) { }

  createNewInfo (body: Object): Observable<any> {
    let bodyString = JSON.stringify(body); // Stringify payload
    return this.httpPut.put(this.createInfoAPIEndPoint,body)
      .map((res:Response) => {
        res.json()
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
