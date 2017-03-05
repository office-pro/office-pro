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
//import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MenuSliderItemComponent } from './nav-header/menu-slider-item/menu-slider-item.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
//import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginRoutes,
    DashboardRoutesComponent,
    UserProfileComponent,
    SidenavDirective,
    NavHeaderComponent,
    MenuSliderItemComponent,
    DashboardSidebarComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  //  FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
   // ModalModule.forRoot(),
    // BootstrapModalModule,
    AppRoutingModule,
    LoginRouteModules,
    DashboardRoutes,
    ReactiveFormsModule
  ],
  providers: [TaskService, DashboardService],
  bootstrap: [AppComponent]
}) 
export class AppModule {
 }
