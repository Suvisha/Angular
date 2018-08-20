import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { Employees } from '../mock-Employees';
import { EmployeeManagerService } from '../employee-manager.service';
@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {
   employees:Employee[] = Employees;
   update : Employee = null;
   deleteId : number ;
  constructor(  private employeeManager: EmployeeManagerService) { }
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees()
  {
    this.employeeManager.getAllEmployees().subscribe(employee => this.employees=employee);
  }
  deleteById(employeeId : number)
  {
    this.deleteId = employeeId;
  }
  edit(employee : Employee)
  {
    this.update=employee;
  }
}
