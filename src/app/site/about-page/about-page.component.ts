import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  public headerPic = true;
  public title = 'About';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.headerPic = this.activatedRoute.snapshot.data.headerPic;
  }
}
