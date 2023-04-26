import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) { }

  proceedlogin(data: any):Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signIn',data)
  }
}
