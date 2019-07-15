import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {SiteModule} from './site/site.module';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './auth/auth.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        AdminComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        AuthModule,
        SiteModule,
        HttpClientModule
    ],

    providers: [UsersService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
