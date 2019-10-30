import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideogamesComponent } from './videogames/videogames.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { VideogamesEditComponent } from './videogames/videogames-edit/videogames-edit.component';
import { PlatformsEditComponent } from './platforms/platforms-edit/platforms-edit.component';


const routes: Routes = [
   { path: 'videogames', component: VideogamesComponent },
   { path: 'videogame/:id', component: VideogamesEditComponent},
   { path: 'platforms', component: PlatformsComponent },
   { path: 'platform/:id', component: PlatformsEditComponent },
   { path: '', redirectTo: '/platforms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
