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
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { CalendarDrawerComponent} from './calendar-drawer/calendar-drawer.component';
import { CalendarHeaderComponent } from './calendar/calendar.component';
import { CalendarComponent } from './calendar/calendar.component'


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    CalendarDrawerComponent,
    CalendarHeaderComponent,
    CalendarComponent
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
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  exports: [
    NavComponent,
    HeaderComponent,
    CalendarDrawerComponent,
    CalendarComponent
  ],
})
export class SharedModule { }
