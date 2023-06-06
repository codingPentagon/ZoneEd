import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

const url = 'http://localhost:8080/user/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  fetchUsersByTypeOnRole(sclID:number,role:string,type:string,clsID:number){
    return this.http.get<User[]>(url+'byTypeOnRole/'+sclID+'/'+role+'/'+type+'/'+clsID);
  }

  fetchUser(id: number) {
    return this.http.get<User>(url+id);
  }
}
