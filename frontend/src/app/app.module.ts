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
import {ServicesModule} from "./services/services.module";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {environment} from 'src/environments/environment'

const firebaseConfig = {
  apiKey: "AIzaSyDNYmNI8dvHyNRpcp2JNSRdYCrUSz2vEyI",
  authDomain: "zoneed-a61da.firebaseapp.com",
  projectId: "zoneed-a61da",
  storageBucket: "zoneed-a61da.appspot.com",
  messagingSenderId: "896598316718",
  appId: "1:896598316718:web:274c66582a3baa5aeabf3f"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
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
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
