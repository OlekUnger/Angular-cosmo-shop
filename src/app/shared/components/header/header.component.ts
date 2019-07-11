import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
    console.log(this.isAuthenticated);
  }

}
