import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class ServicesModule { }
