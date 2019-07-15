import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    OnInit,
    TemplateRef,
    ViewChild
} from '@angular/core';

import {AuthService} from '../../../auth/auth.service';
import {UsersService} from '../../services/users.service';
import {User} from '../../interfaces/user';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('isLogged', {static: false}) isLogged: TemplateRef<any>;
    @ViewChild('isNotLogged', {static: false}) isNotLogged: TemplateRef<any>;
    @ViewChild('headerPic', {static: false}) headerPic: TemplateRef<any>;

    navigation = [
        {title: 'Главная', link: '/'},
        {title: 'О нас', link: '/about'},
        {title: 'Контакты', link: '/contacts'},
        {title: 'Каталог', link: '/catalog'}
    ];

    isAuthenticated = false;
    user: User;
    config = {
        userMenu: {},
        headerPic: true
    };

    constructor(
        private authService: AuthService,
        private userService: UsersService,
        private router: Router,
        private cd: ChangeDetectorRef
    ) {

        let excludedPaths = ['/catalog', '/auth/register', '/auth/login'];

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                if (excludedPaths.includes(event.url)) {
                    this.config['headerPic'] = false;
                } else {
                    this.config['headerPic'] = true;
                }
            });
    }

    ngOnInit() {
        this.isAuthenticated = this.authService.isLoggedIn();
        this.config.userMenu['isLogged'] = this.isAuthenticated;
        this.config.userMenu['isNotLogged'] = !this.isAuthenticated;

        if (this.isAuthenticated) {
            this.user = this.userService.getUser();
        }
    }

    onLogout() {
        this.authService.logout();
        this.isAuthenticated = this.authService.isLoggedIn();
        this.config.userMenu['isNotLogged'] = true;
        this.config.userMenu['isLogged'] = false;
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }

    ngAfterViewInit() {
        this.cd.detectChanges();
    }


}
