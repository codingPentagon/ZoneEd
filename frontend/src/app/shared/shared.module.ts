import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { NavComponent } from './nav/nav.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
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
    MatExpansionModule,
    RouterOutlet,
    RouterLinkActive,

  ],
  exports: [
    NavComponent,
    HeaderComponent
  ],
  providers:[
    {
      provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
      useValue: {
        hideToggle: true,
        expandedHeight: '50px',
        collapsedHeight: '40px'
      }
    }
  ]
})
export class SharedModule { }
