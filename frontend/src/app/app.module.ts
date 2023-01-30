import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegStuComponent } from './reg-stu/reg-stu.component';
import {MatInputModule} from "@angular/material/input";
import { StuDashboardComponent } from './stu-dashboard/stu-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegStuComponent,
    StuDashboardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
