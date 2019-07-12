import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UsersService} from '../../services/users.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigation = [
    {title: 'Главная', link: '/'},
    {title: 'О нас', link: '/about'},
    {title: 'Контакты', link: '/contacts'},
    {title: 'Каталог', link: '/catalog'}
  ];

  isAuthenticated;
  user: User;

  constructor(private authService: AuthService, private userService: UsersService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
    this.user = this.userService.getUser();
  }

}
