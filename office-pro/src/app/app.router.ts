import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

export const router: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component: LoginComponentComponent},
    {path:'about',component: AboutComponent},
    {path:'services',component: ServicesComponent},
    {path:'about/:id',component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}

export const routingComponents = [AppComponent,LoginComponentComponent,ServicesComponent,AboutComponent];