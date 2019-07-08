import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SiteModule} from './site/site.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {CommonModule} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {HeaderComponent} from './shared/components/header/header.component';
import {SiteComponent} from './site/site.component';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        HeaderComponent,
        SiteComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppRoutingModule,
        BrowserModule,
        SiteModule,
        AuthModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
