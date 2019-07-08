import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
