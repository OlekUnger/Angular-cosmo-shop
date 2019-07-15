import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FlipDirective} from './directives/flip.directive';
import {MomentPipe} from './pipes/moment.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        FlipDirective,
        MomentPipe
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        HeaderComponent,
        FlipDirective,
        MomentPipe
    ],
    providers: [],

})
export class SharedModule {
}
