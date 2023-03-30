import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";
import {BaseModule} from "./base/base.module";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BaseModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
