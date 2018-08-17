import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EmployeesComponent } from './Employees/Employees.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes:Routes=[
  {path:'',component:EmployeesComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
