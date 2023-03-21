import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  

 // constructor(private auth:AuthGuard){}
 
 constructor(private  userRegService:UserRegService){}
  fullName: any;

  testUserData(fullName: any) {
    this.fullName=fullName;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if(this.userRegService.fullName==="admin3"){
      return true;
    }
      else{
        return false;
      }
      }
    
  
}
