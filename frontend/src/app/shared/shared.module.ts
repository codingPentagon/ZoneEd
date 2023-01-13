import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { NavComponent } from './nav/nav.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    NavComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,

    ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
