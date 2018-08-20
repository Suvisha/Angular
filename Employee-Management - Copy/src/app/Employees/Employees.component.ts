import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { Employees } from '../mock-Employees';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {
   employees:Employee[] = Employees;
   update : Employee = null;
   deleteId : number ;
  constructor() { }
  ngOnInit() {
  }

}
