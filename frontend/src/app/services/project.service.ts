import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Proposal} from "../models/proposal.model";
import {Project} from "../models/project.model";

const url='http://localhost:8080/projects/'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  fetchProposals(sclID: number) {
    return this.http.get<Proposal[]>(url+'proposals/'+sclID.toString())
  }

  addProposal(proposal: Proposal) {
    return this.http.post(url+'proposals/',proposal);
  }

  fetchProjects(sclID: number) {
    return this.http.get<Project[]>(url+sclID.toString())
  }

  addProject(project: Project) {
    return this.http.post(url,project);
  }
}
