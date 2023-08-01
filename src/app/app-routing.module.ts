import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './Components/employe-list/employe-list.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';

const routes: Routes = [
{
  path:'',component:EmployeListComponent
},
{
  path:'employee',component:EmployeListComponent
},
{
  path:'employee/add',component:AddEmployeeComponent
},
{
  path:'employee/edit/:id',component:EditEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
