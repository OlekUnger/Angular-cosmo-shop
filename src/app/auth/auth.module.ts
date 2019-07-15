import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from '../shared/components/auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LoginModule} from './login/login.module';
import {AuthGuard} from './auth.guard';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        LoginModule,
        SharedModule
    ],
    providers: [AuthGuard]
})
export class AuthModule {
}
