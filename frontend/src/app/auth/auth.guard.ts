import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Stu } from '../stu';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

 // constructor(private auth:AuthGuard){}
 

  fullName: any;

  testUserData(fullName: any) {
    this.fullName=fullName;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.fullName==="admin3"){
      return false;
    }
      else{
        return true;
      }
      }
    
  
}
