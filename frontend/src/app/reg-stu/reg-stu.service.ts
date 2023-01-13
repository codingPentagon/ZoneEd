import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RegStuService {

  constructor(private http:HttpClient) { }

  save(user:any){
    //console.log(user);
    this.http.post('http://localhost:8080/api/users', user).subscribe(res => {
      console.log(res);
    });
  }
}
