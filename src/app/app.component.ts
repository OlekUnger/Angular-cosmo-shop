import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'angular-cosmo-shop';
    headerPic = true;

    constructor(private router: Router, private authService: AuthService) {
        // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        //     .subscribe((event: NavigationEnd) => {
        //         console.log(event.url)
        //         if (event.url === '/catalog') {
        //             this.headerPic = false;
        //         }
        //     });
    }

    ngOnInit() {
        this.authService.loginIfRemembered();
    }
}
