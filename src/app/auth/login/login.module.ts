import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { EnterFormComponent } from './enter-form/enter-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        EnterFormComponent,
        ResetPasswordFormComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
    ],
    exports: [
        EnterFormComponent,
        ResetPasswordFormComponent
    ]
})
export class LoginModule {
}
