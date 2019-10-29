import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideogamesComponent } from './videogames/videogames.component';
import { PlatformsComponent } from './platforms/platforms.component';


const routes: Routes = [
   { path: 'videogames', component: VideogamesComponent },
   { path: 'platforms', component: PlatformsComponent },
   { path: '', redirectTo: '/platforms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
