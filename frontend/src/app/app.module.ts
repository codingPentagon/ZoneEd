import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {FormsModule} from "@angular/forms";
import { LeaveTchrComponent } from './leave-tchr/leave-tchr.component';
import { LeavePrinComponent } from './leave-prin/leave-prin.component';
import {ServicesModule} from "./services/services.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import { LeavesOverviewComponent } from './leaves-overview/leaves-overview.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaveTchrComponent,
    LeavePrinComponent,
    LeavesOverviewComponent,
    LeaveRequestsComponent,
  ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatTableModule,
        MatDividerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatTimepickerModule,
        FormsModule,
        ServicesModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
