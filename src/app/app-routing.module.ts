import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { PlaySpaceComponent } from "./components/play-space/play-space.component";
import { EditorComponent } from "./components/editor/editor.component";

const routes: Routes = [
  { path: '', redirectTo: 'MainMenu', pathMatch: 'full' },
  { path: 'MainMenu', component: MainMenuComponent },
  { path: 'Editor', component: EditorComponent },
  { path: 'Play', component: PlaySpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
