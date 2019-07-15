import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SiteComponent} from './site.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
// import {CatalogComponent} from './catalog/catalog.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NotFoundComponent} from '../not-found/not-found.component';


const routes: Routes = [
    {
        path: '', component: SiteComponent, children: [
            {path: '', component: HomePageComponent},
            {path: 'about', component: AboutPageComponent},
            {path: 'contacts', component: ContactsPageComponent},
            {path: 'catalog', loadChildren: './catalog/catalog.module#CatalogModule'},
            // {path: 'catalog', component: CatalogComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule {
}
