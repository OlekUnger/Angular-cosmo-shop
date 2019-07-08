import {Component, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';



@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private viewContainerRef: ViewContainerRef) {
        // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        //     .subscribe((event: NavigationEnd) => {
        //         // console.log(event.url)
        //         // if (event.url === '/catalog') {
        //         //     // this.headerPic = false;
        //         // }
        //     });
    }

    ngOnInit() {
    }

}
