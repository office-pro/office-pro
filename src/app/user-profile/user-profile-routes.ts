import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 
import { UserProfileComponent } from './user-profile.component'

export const routes: Routes = [{path:'user-profile',component: UserProfileComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRouteModules {

}

export const userProfileRoutes = [UserProfileComponent];