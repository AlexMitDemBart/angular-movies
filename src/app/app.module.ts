import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { HeaderComponent } from './components/header/header.component';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import {NxInputModule} from '@aposin/ng-aquila/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent
  ],
    imports: [
        BrowserModule,
        NxExpertModule,
        NxHeaderModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        NxGridModule,
        NxInputModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
