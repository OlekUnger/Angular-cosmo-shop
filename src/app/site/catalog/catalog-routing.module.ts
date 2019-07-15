import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from './catalog.component';
import {NotFoundComponent} from '../../not-found/not-found.component';


const routes: Routes = [
    {
        path: '', component: CatalogComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule {
}
