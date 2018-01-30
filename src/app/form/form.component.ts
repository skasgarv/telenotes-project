import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import {FormArray, FormControl, FormGroup} from '@angular/forms';

import { CreateInfoService } from '../create-info.service';
import { UpdateInfoService } from '../updateInfo.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() individualData;
  @Input() createForm;

  constructor(public fb: FormBuilder,
    private createInfo: CreateInfoService,
    private updateInfo: UpdateInfoService) { }

  public companyForm: FormGroup;

  ngOnInit() {
    this.companyForm = this.fb.group({
      CompanyID:"",
      AccountId:"",
      CompanyName:["",Validators.required],
      StreetAddress:"",
      StreetAddress2:"",
      City:"",
      ZipCode:"",
      State:"",
      Country:"",
      webSite:"",
      CreatedDate:"",
      status:"",
      Type: "",
      Contacts: this.fb.array([]),
    });

    //map individual contacts to form if present else show empty form
    if(this.individualData){
      for(let i=0;i<this.individualData.Contacts.length; i++) {
        this.addNewContactData(this.individualData.Contacts[i]);
      }
      //patch the form data
      this.companyForm.patchValue({
        CompanyID: this.individualData.CompanyID ? this.individualData.CompanyID: "N/A",
        AccountId: this.individualData.AccountId ? this.individualData.AccountId: "N/A",
        CompanyName: this.individualData.CompanyName ? this.individualData.CompanyName : "N/A",
        StreetAddress:this.individualData.StreetAddress ? this.individualData.StreetAddress : "N/A",
        StreetAddress2:this.individualData.StreetAddress2 ? this.individualData.StreetAddress2 : "N/A",
        City:this.individualData.City ? this.individualData.City : "N/A",
        ZipCode:this.individualData.ZipCode ? this.individualData.ZipCode : "N/A",
        State:this.individualData.State ? this.individualData.State : "N/A",
        Country:this.individualData.Country ? this.individualData.Country : "N/A",
        webSite:this.individualData.webSite ? this.individualData.webSite : "N/A",
        CreatedDate:this.individualData.CreatedDate ? this.individualData.CreatedDate : "N/A",
        status:this.individualData.status ? this.individualData.status : "N/A",
        Type: this.individualData.Type ? this.individualData.Type : "N/A"
      });
    }
    else {
      // Form should be empty. Send empty data
      let emptyIndividualData: object = {};
      this.addNewContactData(emptyIndividualData);
    }
  }

  // initialize form data if data present else initialize as empty form
  initContactData(data) {
        return this.fb.group({
            ContactId: [data ? data.ContactId : ""],
            title:[data ? data.title : ""],
            firstname:[data ? data.firstname : ""],
            LastName:[data ? data.LastName : ""],
            ContactCity:[data ? data.ContactCity : ""],
            ContactState:[data ? data.ContactState : ""],
            ContactZip:[data ? data.ContactZip : ""],
            PrimaryPhone:[data ? data.PrimaryPhone : ""],
            ext:[data ? data.ext : ""],
            MobilePhone: [data ? data.MobilePhone : ""],
            fax:[data ? data.fax : ""],
            email:[data ? data.email : ""],
            ContactAddress:[data ? data.ContactAddress : ""],
            Contactaddress2:[data ? data.Contactaddress2 : ""],
            HomePhone:[data ? data.HomePhone : ""],
            email2:[data? data.email2 : ""],
            birthday:[data ? data.birthday : ""],
            dept:[data? data.dept : ""],
            status:[data? data.status: ""],
            Type: [data? data.Type: ""]
        });
    }


  // Show contact form with existing data
  addNewContactData(initData:object) {
    const control = <FormArray>this.companyForm.controls['Contacts'];
    let addrCtrl: any;
    addrCtrl = this.initContactData(initData);
    control.push(addrCtrl);
  }


  // Option to remove the contact
  removeContactInfo(indexValue:number) {
    let deleteConfirm = confirm("Delete Contact Info?");
    if(deleteConfirm) {
      const controlRemove = <FormArray>this.companyForm.controls['Contacts'];
      controlRemove.removeAt(indexValue);
    }
  }

  // Post call to API to update data in DB
  updateForm() {
    // do a post call here from service
    console.log("Post this data=",this.companyForm.value);
    this.updateInfo.updateInfo(this.companyForm.value).subscribe(response => {
      console.log("Updated=", response)
    })

  }

  updateNewData() {
    // do a post call here from service
    console.log("Create this data and post it=",this.companyForm.value)
    this.createInfo.createNewInfo(this.companyForm.value).subscribe(response => {
      console.log(response)
    })

  }

}
