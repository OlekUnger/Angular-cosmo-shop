import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {
        path: 'auth', component: AuthComponent, children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'register', component: RegisterComponent},
            {path: 'login', component: LoginComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
