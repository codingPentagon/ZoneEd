import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { NavComponent } from './nav/nav.component';
import {RouterLink} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CalendarComponent} from "./calendar/calendar.component";
import {CalendarToggleService} from "./calendar/calendar-toggle.service";
import {CalendarConnectorService} from "./calendar/calendar-connector.service";
import {MbscEventcalendarModule, Notifications} from "@mobiscroll/angular";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MbscEventcalendarModule,
    HttpClientModule,

  ],

  exports: [
    NavComponent,
    HeaderComponent,
    CalendarComponent
  ],

  providers: [
    CalendarToggleService,
    CalendarConnectorService,
    Notifications
  ]
})
export class SharedModule { }
