import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FlipDirective} from './directives/flip.directive';
import {MomentPipe} from './pipes/moment.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FlipDirective,
        MomentPipe,
        SidebarComponent
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
