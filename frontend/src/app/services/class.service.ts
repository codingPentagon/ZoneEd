import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Class} from "../models/class.model";

const url = 'http://localhost:8080/classes/'

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  fetchClasses(sclID: number) {
    return this.http.get<Class[]>(url+sclID.toString())
  }
}
