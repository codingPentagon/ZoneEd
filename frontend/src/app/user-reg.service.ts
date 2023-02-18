import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stu } from './stu';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {
  





  constructor(private httpClient:HttpClient) { }
  sendStuData(stu:Stu) {
    alert("Hello11");
    console.log(stu);
    return this.httpClient.post("http://localhost:8080/register",stu);
  }

}
