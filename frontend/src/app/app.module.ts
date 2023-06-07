import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { CalendarPrinComponent } from './calendar-prin/calendar-prin.component';
import { CalendarZonalComponent } from './calendar-zonal/calendar-zonal.component';
import { SchoolEventsComponent } from './school-events/school-events.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CalendarTemplatesComponent } from './calendar-templates/calendar-templates.component';
import {ServicesModule} from "./services/services.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CalendarPrinComponent,
    CalendarZonalComponent,
    SchoolEventsComponent,
    HolidaysComponent,
    CalendarTemplatesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ServicesModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
