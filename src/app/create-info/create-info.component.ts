import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.css']
})
export class CreateInfoComponent implements OnInit {
  constructor() { }
  createFormFlag: boolean = false;
  ngOnInit() {
  }

  createNewForm() {
    this.createFormFlag = true;
  }

}
