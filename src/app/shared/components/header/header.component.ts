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
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('isLogged', {static: false}) isLogged: TemplateRef<any>;
    @ViewChild('isNotLogged', {static: false}) isNotLogged: TemplateRef<any>;


    navigation = [
        {title: 'Главная', link: '/'},
        {title: 'О нас', link: '/about'},
        {title: 'Контакты', link: '/contacts'},
        {title: 'Каталог', link: '/catalog'}
    ];

    isAuthenticated = false;
    user: User;
    config = {};

    constructor(
        private authService: AuthService,
        private userService: UsersService,
        private router: Router,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.isAuthenticated = this.authService.isLoggedIn();
        this.config['isLogged'] =  this.isAuthenticated;
        this.config['isNotLogged'] = !this.isAuthenticated;

        if (this.isAuthenticated) {
            this.user = this.userService.getUser();
        }
    }

    onLogout() {
        this.authService.logout();
        this.isAuthenticated = this.authService.isLoggedIn();
        this.config['isNotLogged'] = true;
        this.config['isLogged'] = false;
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }

    ngAfterViewInit() {
        this.cd.detectChanges();
    }


}
