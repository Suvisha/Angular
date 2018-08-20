import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateclick : Employee = {
    id : 1,
    Name : "opds",
    Designation : "It"
  }

  constructor() { }

  ngOnInit() {
  }
cancel()
{
  this.updateclick=null;
}
}
