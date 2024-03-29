import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    PageNotFoundComponent
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
    MatMenuModule,
    NgOptimizedImage,

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
        expandedHeight: '47px',
        collapsedHeight: '40px'
      }
    }
  ]
})
export class SharedModule { }
