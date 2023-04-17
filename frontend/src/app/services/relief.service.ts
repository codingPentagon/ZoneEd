import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReliefRecord, ReliefSlotCandidates} from "../models/relief.model";

const url = 'http://localhost:8080/relief/';
@Injectable({
  providedIn: 'root'
})
export class ReliefService {

  constructor(private http:HttpClient) { }

  fetchReliefSlotsCandidates(sclID: number, teacherID: number) {
    return this.http.get<ReliefSlotCandidates[]>(url + 'reliefSlotsCandidates/' + sclID + '/' + teacherID);
  }

  addReliefAllocations(reliefAllocations: ReliefRecord[]) {
    return this.http.post(url, reliefAllocations);
  }
}
