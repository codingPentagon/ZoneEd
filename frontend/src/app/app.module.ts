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
import {AngularFireModule} from "@angular/fire/compat";


const firebaseConfig = {
  apiKey: "AIzaSyDNYmNI8dvHyNRpcp2JNSRdYCrUSz2vEyI",
  authDomain: "zoneed-a61da.firebaseapp.com",
  projectId: "zoneed-a61da",
  storageBucket: "zoneed-a61da.appspot.com",
  messagingSenderId: "896598316718",
  appId: "1:896598316718:web:274c66582a3baa5aeabf3f"
};
import { NoticeComponent } from './notice/notice.component';
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    NoticeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
    MatButtonToggleModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgxFileDropModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
