import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-cosmo-shop';
    headerPic = true;

    constructor(private router: Router) {
        // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        //     .subscribe((event: NavigationEnd) => {
        //         console.log(event.url)
        //         if (event.url === '/catalog') {
        //             this.headerPic = false;
        //         }
        //     });
    }
}
