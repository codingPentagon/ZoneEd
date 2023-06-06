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
  fullName: any='';

  testUserData(fullName: any) {
    this.fullName=fullName;
  }
  canActivate(  // The canActivate method is used as a guard to determine if a route can be activated.
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.fullName);
    if(this.userRegService.fullName===this.fullName){ //if this is true,user can route to dashboard,used authGuard for secure route
      console.log(this.userRegService.fullName,this.fullName); //check values on the console
      return true;  //if true,can route
    }
      else{
      
        return false; //if false,can't route
      }
      }
    
  
}
