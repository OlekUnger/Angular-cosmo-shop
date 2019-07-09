import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteRoutingModule} from './site-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import {SiteComponent} from './site.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        SiteComponent,
        AboutComponent,
        ContactsComponent,
        CatalogComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        SharedModule
    ]
})
export class SiteModule {
}
