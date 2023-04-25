import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../models/school.model";


const url='http://localhost:8080/schools/'
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { }

  fetchSchools() {
    return this.http.get<School[]>(url)
  }
}
