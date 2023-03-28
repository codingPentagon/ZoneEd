import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Proposal} from "../models/proposal.model";

const url='http://localhost:8080/projects/'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  fetchProposals(sclID: number) {
    return this.http.get<Proposal[]>(url+'proposals/'+sclID.toString())
  }
}
