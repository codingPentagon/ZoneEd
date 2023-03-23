import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  fullName: any;

  constructor(private http:HttpClient) { }

  
  getUserDeatils(): Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/stu/regStuData/vfdsvgdsgbv`);
  }
}
