import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

export const routes: Routes = [{path:'signup',component: SignupComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class LoginRouteModules {

}

export const LoginRoutes = [SignupComponent];