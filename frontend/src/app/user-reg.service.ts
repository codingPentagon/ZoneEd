import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Stu } from './stu';


@Injectable({
  providedIn: 'root'
})
export class UserRegService {


  setUserData(fullName: any) {
    this.fullName=fullName;
  }
  fullName: any;
  

  constructor(private httpClient:HttpClient) { }


  sendStuData(stu:Stu) {
    console.log(stu);
    return this.httpClient.post("http://localhost:8080/api/v1/stu/regStu",stu);
  }

  apiurl='http://localhost:8080/api/v1/stu"';

  public proceedlogin(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/v1/stu/regStuData/${this.fullName}`);
  }
  
  


 

}
