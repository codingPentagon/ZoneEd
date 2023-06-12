import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Stu } from './stu';
import { Tchr } from './tchr';
import { Prin } from './prin';


@Injectable({
  providedIn: 'root'
})
export class UserRegService {



  setUserData(fullName: any) {
    this.fullName=fullName;
  }
  fullName: any;
  

  constructor(private httpClient:HttpClient) { }//injet http client module for hppt request purposes


  sendStuData(stu:Stu) {//when reg student this method will invoke and send post request to backend
    console.log(stu);
    return this.httpClient.post("http://localhost:8080/api/auth/reg/stu",stu); //rest api for reg student
  }
  
  sendTchData(tch:Tchr) {//when reg teacher this method will invoke and send post request to backend
    console.log(tch);
    return this.httpClient.post("http://localhost:8080/api/auth/reg/tch",tch);//rest api for reg teacher
  }

  sendPriData(prin:Prin) {//when reg teacher this method will invoke and send post request to backend
    console.log(prin);
    return this.httpClient.post("http://localhost:8080/api/auth/reg/prin",prin);//rest api for reg teacher
  }



  apiurl='http://localhost:8080/api/v1/stu"';

  // public proceedlogin(): Observable<any> {
  //   return this.httpClient.get(`http://localhost:8080/api/v1/login/${this.fullName}`);
  // }
 
  
  public proceedlogin(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/v1/login/${this.fullName}`);
  }


 

}
