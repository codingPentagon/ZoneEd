import { Injectable } from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {HttpClient} from "@angular/common/http";

const url = 'http://localhost:8080/leaves/';
@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http:HttpClient) { }

  fetchLeavesToday(sclID:number) {
    return this.http.get<Teacher[]>(url + 'today/' + sclID);
  }
}
