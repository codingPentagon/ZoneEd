import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Assessment} from "../models/assessment.model";

const url = 'http://localhost:8080/assessments/';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

  constructor(private http:HttpClient) { }

  fetchAssessments(sclID:number,clsID:number,subjectID:number){
    return this.http.get<Assessment[]>(url+sclID+'/'+clsID+'/'+subjectID);
  }

  addAssessment(assessment: Assessment) {
    return this.http.post(url,assessment);
  }
}
