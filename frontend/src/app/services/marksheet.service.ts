import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Marksheet} from "../models/marksheet.model";

const url='http://localhost:8080/marksheet/'
@Injectable({
  providedIn: 'root'
})
export class MarksheetService {

  constructor(private http:HttpClient) { }

  fetchMarksheet(studentID: number, year: number, term:number) {
    return this.http.get<Marksheet>(url+studentID.toString()+'/'+year.toString()+'/'+term.toString())
  }

  addMarksheet(marksheet:Marksheet) {
    return this.http.post(url,marksheet)
  }
}
