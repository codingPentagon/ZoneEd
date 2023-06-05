import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AcsGrantRequest} from "../models/acs-grant.model";

const url = 'http://localhost:8080/acs-grant/';

@Injectable({
  providedIn: 'root'
})
export class AcsGrantService {

  constructor(private http:HttpClient) { }

  addRequest(request:AcsGrantRequest){
    return this.http.post(url+'requests/',request);
  }

  fetchRequests(sclID: number) {
    return this.http.get<AcsGrantRequest[]>(url+'requests/'+sclID);
  }
}
