import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformsComponent } from './platforms/platforms.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { PlatformsEditComponent } from './platforms/platforms-edit/platforms-edit.component';
import { VideogamesEditComponent } from './videogames/videogames-edit/videogames-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformsComponent,
    VideogamesComponent,
    PlatformsEditComponent,
    VideogamesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
