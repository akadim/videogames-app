import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

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
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
