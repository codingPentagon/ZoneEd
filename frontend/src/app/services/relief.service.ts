import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../models/teacher.model";
import {ReliefSlotCandidates} from "../models/relief.model";

const url = 'http://localhost:8080/relief/';
@Injectable({
  providedIn: 'root'
})
export class ReliefService {

  constructor(private http:HttpClient) { }

  fetchTeachersOnLeave(sclID:number) {
    return this.http.get<Teacher[]>(url + 'teachersOnLeave/' + sclID);
  }

  fetchReliefSlotsCandidates(sclID: number, teacherID: number) {
    return this.http.get<ReliefSlotCandidates[]>(url + 'reliefSlotsCandidates/' + sclID + '/' + teacherID);
  }
}
