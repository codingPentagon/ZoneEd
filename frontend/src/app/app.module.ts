import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { RegStuComponent } from './reg-stu/reg-stu.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { RegTchrComponent } from './reg-tchr/reg-tchr.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { StuDashboardComponent } from './stu-dashboard/stu-dashboard.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RegPrinComponent } from './reg-prin/reg-prin.component';



@NgModule({
  declarations: [
    //created components for implementation
    AppComponent,
    RegStuComponent,
    RegTchrComponent,
    LoginComponent,
    StuDashboardComponent,
    RegPrinComponent,

  ],
    imports: [
      //import modules for app functions
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,//use reactive form modules
        FormsModule,//for handle forms
        MatSelectModule,
        MatSidenavModule,
        MatButtonModule,
        HttpClientModule,//for handale http request
        MatCardModule,
        MatStepperModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
