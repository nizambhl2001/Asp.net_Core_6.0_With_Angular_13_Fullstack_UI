import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 baseUrl = "http://localhost:5207"
  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
   return this.http.get<Employee[]>(this.baseUrl + '/api/Employee')
  }
  AddEmployee(addEmployeeRequest :Employee):Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseUrl + '/api/Employee',addEmployeeRequest)
   }
  getEmloyee(id:string):Observable<Employee>{
   return this.http.get<Employee>(this.baseUrl + '/api/Employee/' + id)
  } 
  UpdateEmploee(id:string,UpdateEmployeeRequest :Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl + '/api/Employee/' + id,UpdateEmployeeRequest)
  }
  DeleteEmploee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl + '/api/Employee/' + id)
  }
}
