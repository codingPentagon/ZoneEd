import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) { }// Constructor for the AuthServicesService class that takes an instance of HttpClient


  proceedlogin(data: any):Observable<any>{  // This method is used to proceed with the login process and takes data as input
    return this.http.post('http://localhost:8080/api/auth/signIn',data) //Send a POST request to backend for signin
  }
}
