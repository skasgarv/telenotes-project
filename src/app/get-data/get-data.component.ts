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
  openModal = false;
  modalData = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
    this.openModal = false;
  }

  getUserData() {
    this.http.get(this.APIendPoint).subscribe( response => {
      this.userData = response;
    })
  }

  addDataToModal(data) {
    this.modalData = [data];
    this.openModal = true;
  }

  deleteData(deleteData){
    let deleteCompanyConfirm = confirm("Delete Company?");
    if(deleteCompanyConfirm) {
      console.log("Data to be deleted", deleteData)
      
    }
    //http://devapp.telenotes.com/api/data/suhas/[CompanyID]
  }

}
