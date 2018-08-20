import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Employees/Employees.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    UpdateComponent,
    DeleteComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
