import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { AssessmentStuComponent } from './assessment-stu/assessment-stu.component';
import { AssessmentTchrComponent } from './assessment-tchr/assessment-tchr.component';
import {ServicesModule} from "./services/services.module";
import { AssessmentCreateDialog} from './assessment-create/assessment-create.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxFileDropModule} from "ngx-file-drop";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AssessmentStuComponent,
    AssessmentTchrComponent,
    AssessmentCreateDialog,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ServicesModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxFileDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
