import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule,routingComponents } from './app.router';
import { LoginRouteModules,LoginRoutes} from './login-component/login-router';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { DashboardRoutes,DashboardRoutesComponent } from './dashboard/dashboard.router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidenavDirective } from './sidenav.directive';
import { DashboardService } from './dashboard.service';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ProfileRouteModules, userProfileRoutes } from './user-profile/user-profile-routes';
//import { ModalModule } from 'ngx-bootstrap';
//import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MenuSliderItemComponent } from './nav-header/menu-slider-item/menu-slider-item.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { PiechartComponent } from './shared/piechart/piechart.component';
import { BubblechartComponent } from './shared/bubblechart/bubblechart.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {ModalModule} from 'ng2-bs4-modal/ng2-bs4-modal';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginRoutes,
    DashboardRoutesComponent,
    userProfileRoutes,
    UserProfileComponent,
    SidenavDirective,
    NavHeaderComponent,
    MenuSliderItemComponent,
    DashboardSidebarComponent,
    AdminDashboardComponent,
    BarchartComponent,
    PiechartComponent,
    BubblechartComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  //  FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    ModalModule,
    //BootstrapModalModule,
    AppRoutingModule,
    LoginRouteModules,
    DashboardRoutes,
    ProfileRouteModules,
    ReactiveFormsModule
  ],
  providers: [TaskService, DashboardService],
  bootstrap: [AppComponent]
}) 
export class AppModule {
 }
