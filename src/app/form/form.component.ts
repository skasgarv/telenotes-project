import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() individualData;
  @Input() createForm;
  constructor(public fb: FormBuilder) { }
  public companyForm: FormGroup;
  ngOnInit() {
    this.companyForm = this.fb.group({
     companyName:"",
     accountId: "",
     companyAddress1:"",
     companyAddress2:"",
     companyCity:"",
     companyZip:"",
     companyState:"",
     companyCountry:"",
     companyWebsite:"",
     Contacts: this.fb.array([]),
    });
    //map individual contacts to form if present else show empty form
    if(this.individualData){
      for(let i=0;i<this.individualData.Contacts.length; i++) {
        this.addNewContactData(this.individualData.Contacts[i]);
      }
      //patch the form data
      this.companyForm.patchValue({
        companyName: this.individualData.CompanyName ? this.individualData.CompanyName : "N/A",
        accountId: this.individualData.AccountId ? this.individualData.AccountId : "N/A",
        companyAddress1:this.individualData.StreetAddress ? this.individualData.StreetAddress : "N/A",
        companyAddress2:this.individualData.StreetAddress2 ? this.individualData.StreetAddress2 : "N/A",
        companyCity:this.individualData.City ? this.individualData.City : "N/A",
        companyZip:this.individualData.ZipCode ? this.individualData.ZipCode : "N/A",
        companyState:this.individualData.State ? this.individualData.State : "N/A",
        companyCountry:this.individualData.Country ? this.individualData.Country : "N/A",
        companyWebsite:this.individualData.webSite ? this.individualData.webSite : "N/A",
      });
    } else {
      // Form should be empty. Send empty data
      let emptyIndividualData: object = {};
      this.addNewContactData(emptyIndividualData);
      //create an empty form with no data
      this.companyForm.patchValue({
        companyName: "",
        accountId: "",
        companyAddress1:"",
        companyAddress2:"",
        companyCity:"",
        companyZip:"",
        companyState:"",
        companyCountry:"",
        companyWebsite:"",
      });
    }
  }

  // initialize form data if data present else initialize as empty form
  initContactData(data) {
        return this.fb.group({
            firstname:[data ? data.firstname : "", Validators.required],
            lastname:[data ? data.LastName : ""],
            title:[data ? data.title : ""],
            contactId: [data ? data.ContactId : ""],
            contactCity:[data ? data.ContactCity : ""],
            contactState:[data ? data.ContactState : ""],
            contactZip:[data ? data.ContactZip : ""],
            PrimaryPhone:[data ? data.PrimaryPhone : ""],
            ext:[data ? data.ext : ""],
            mobilePh: [data ? data.MobilePhone : ""],
            fax:[data ? data.fax : ""],
            email:[data ? data.email : ""],
            contactAddress:[data ? data.ContactAddress : ""],
            contactaddress2:[data ? data.Contactaddress2 : ""],
            homePhone:[data ? data.HomePhone : ""],
            email2:[data? data.email2 : ""],
            birthday:[data ? data.birthday : ""],
            dept:[data? data.dept : ""]
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
    console.log("Post this data=",this.companyForm.value)
  }

  updateNewData() {
    // do a post call here from service
    console.log("Create this data and post it=",this.companyForm.value)
  }

}
