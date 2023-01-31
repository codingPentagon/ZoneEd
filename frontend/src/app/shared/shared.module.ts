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
import {NotificationComponent} from "./notification/notification.component";
import {NotificationToggleService} from "./notification/notification-toggle.service";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    NotificationComponent,

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
    MatCardModule,
    MatCheckboxModule,
  ],

  exports: [
    NavComponent,
    HeaderComponent,
    NotificationComponent,
  ],

  providers: [
    NotificationToggleService
  ]
})
export class SharedModule { }
