import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FlipDirective} from './directives/flip.directive';

@NgModule({
    declarations: [
        HeaderComponent,
        FlipDirective
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
        FlipDirective
    ],
    providers: [],

})
export class SharedModule {
}
