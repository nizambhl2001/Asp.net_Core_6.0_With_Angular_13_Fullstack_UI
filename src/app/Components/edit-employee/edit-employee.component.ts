import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeUpdaterequest :Employee = {
    id : '',
    name: '',
    email: '',
    phone:0,
    salary:0,
    department: ''
  }
  constructor(private route:ActivatedRoute, private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
       const Id =  param.get('id')
       if(Id){
        this.service.getEmloyee(Id).subscribe({
          next:(res)=>{
            this.employeeUpdaterequest = res
          }
        })
       }
      }
    })
  }
  updateEmployeeById(){
    this.service.UpdateEmploee(this.employeeUpdaterequest.id,this.employeeUpdaterequest).subscribe({
      next:(res)=>{
        this.router.navigate(['employee'])
      }
    })
  }
  DeleteEmp(id:string){
    this.service.DeleteEmploee(id).subscribe({
      next:(res)=>{
        this.router.navigate(['employee'])
      }
    })
  }
}
