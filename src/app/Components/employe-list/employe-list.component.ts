import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
 employee: Employee[] = []
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
   this.service.getAllEmployee().subscribe({
    next:(employee)=>{
      this.employee = employee
    },
    error:(response)=>{
      console.log(response);
      
    }
   }) 
  }

}
