import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from "./main-menu/main-menu.component";

const routes: Routes = [
  { path: '', redirectTo: 'MainMenu', pathMatch: 'full' },
  { path: 'MainMenu', component: MainMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
