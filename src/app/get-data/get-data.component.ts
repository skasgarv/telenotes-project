import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DeleteInfoService } from '../deleteInfo.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  APIendPoint:string = "http://devapp.telenotes.com/api/data/skasgarv";
  userData: any;
  openModal = false;
  modalData = [];

  searchData: string;

  constructor(private http: HttpClient,
    private deleteInfo: DeleteInfoService) { }

  ngOnInit() {
    this.getUserData();
    this.openModal = false;
  }

  getUserData() {
    this.http.get(this.APIendPoint)
      .subscribe( response => {
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
      this.deleteInfo.deleteInfo(deleteData.CompanyID).subscribe(response => {
        console.log("Deleted?",response)
      })
    }
    //http://devapp.telenotes.com/api/data/suhas/[CompanyID]
  }

}
