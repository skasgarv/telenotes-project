import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  @Input() data;
  ngOnInit() {}
  constructor() {}
}
