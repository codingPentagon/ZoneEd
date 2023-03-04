import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stu } from './stu';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {
  

  constructor(private httpClient:HttpClient) { }


  sendStuData(stu:Stu) {
    console.log(stu);
    return this.httpClient.post("http://localhost:8080/api/v1/stu/regStu",stu);
  }

  apiurl='http://localhost:8080/api/v1/user/register"';
  


 

}
