import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

export const router: Routes = [{
    path:"dashboard", component: DashboardComponent
}]

@NgModule ({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class DashboardRoutes {
  
}

export const DashboardRoutesComponent = [DashboardComponent];