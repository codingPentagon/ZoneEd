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
import { FileDropComponent } from './file-drop/file-drop.component';
import {NgxFileDropModule} from "ngx-file-drop";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FileDropComponent
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
        NgxFileDropModule
    ],
  exports: [
    NavComponent,
    HeaderComponent,
    FileDropComponent
  ]
})
export class SharedModule { }
