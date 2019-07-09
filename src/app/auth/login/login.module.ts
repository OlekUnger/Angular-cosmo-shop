import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { EnterFormComponent } from './enter-form/enter-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        EnterFormComponent,
        ResetPasswordFormComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        EnterFormComponent,
        ResetPasswordFormComponent
    ]
})
export class LoginModule {
}
