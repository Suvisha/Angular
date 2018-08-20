import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable ,of} from 'rxjs';
import { Employees } from '../app/mock-Employees'
@Injectable({
  providedIn: 'root'
})
export class EmployeeManagerService {

  constructor() { }
  getAllEmployees():Observable<Employee[]>
  {
    return of(Employees);
  }
  getEmployeeById():Observable<Employee>
  {
     return of();
  }
  Insert():Observable<Employee[]>
  {
    return of(Employees);
  }
  Update():Observable<Employee[]>
  {
    return of(Employees);
  }
  delete():Observable<Employee[]>
  {
    return of(Employees);
  }
}
