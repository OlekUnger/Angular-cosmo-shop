import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteRoutingModule} from './site-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {SiteComponent} from './site.component';
import {SharedModule} from '../shared/shared.module';
// import {CatalogModule} from './catalog/catalog.module';


@NgModule({
    declarations: [
        SiteComponent,
        AboutPageComponent,
        ContactsPageComponent,
        HomePageComponent
    ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        // CatalogModule,
        SharedModule
    ]
})
export class SiteModule {
}
