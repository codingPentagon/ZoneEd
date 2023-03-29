import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";

import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDividerModule} from "@angular/material/divider";

import {MatGridListModule} from "@angular/material/grid-list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { ProjectPrinComponent } from './project-prin/project-prin.component';
import { ProjectZonalComponent } from './project-zonal/project-zonal.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ServicesModule} from "./services/services.module";
import { ProjectProposalsComponent } from './project-proposals/project-proposals.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectMilestonesComponent } from './project-milestones/project-milestones.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectPrinComponent,
    ProjectZonalComponent,
    ProjectProposalsComponent,
    ProjectDetailsComponent,
    ProjectMilestonesComponent,

  ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        ServicesModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        FormsModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatGridListModule,
        MatTabsModule,
        MatChipsModule,
        MatIconModule,
        MatExpansionModule,
        MatButtonToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
