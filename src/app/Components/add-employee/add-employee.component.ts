import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 employeerequest :Employee = {
  id : '',
  name: '',
  email: '',
  phone:0,
  salary:0,
  department: ''
 }
  constructor(private service:EmployeeService, private  router:Router) { }

  ngOnInit(): void {
  }
  addNewEmployee(){
   this.service.AddEmployee(this.employeerequest).subscribe({
    next:(emp)=>{
      this.router.navigate(['employee'])
      
    }
   })
    
  }
}
