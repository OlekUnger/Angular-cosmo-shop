import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
    {
        path: 'auth', component: AuthComponent, canActivate: [AuthGuard], children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'register', component: RegisterComponent},
            {path: 'login', component: LoginComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
