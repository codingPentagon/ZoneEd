import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MailComponent} from './mail/mail.component'
import {ServicesModule} from "./services/mail.module";
import {NgxFileDropModule} from "ngx-file-drop";


@NgModule({
  declarations: [
    AppComponent,
    MailComponent
  ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatChipsModule,
        MatIconModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTabsModule,
        MatDividerModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        FormsModule,
        ServicesModule,
        NgxFileDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
