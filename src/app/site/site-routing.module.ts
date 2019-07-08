import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteComponent} from './site.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CatalogComponent} from './catalog/catalog.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: SiteComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: '**', component: NotFoundComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
