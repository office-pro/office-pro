import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routes
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
}) 
export class AppModule {
 }
