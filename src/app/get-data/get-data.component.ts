import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  APIendPoint:string = "http://devapp.telenotes.com/api/data/suhas";
  userData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.http.get(this.APIendPoint).subscribe( response => {
      console.log(response);
      this.userData = response;
    })
  }

}
