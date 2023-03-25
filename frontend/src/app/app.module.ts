import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import { ScheduleTchrComponent } from './schedule-tchr/schedule-tchr.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import { SchedulePrinComponent } from './schedule-prin/schedule-prin.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {ServicesModule} from "./services/services.module";
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTchrComponent,
    SchedulePrinComponent,
    ScheduleComponent
  ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule,
        MatButtonModule,
        MatChipsModule,
        ServicesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
