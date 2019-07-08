import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public headerPic = true;
  public title = 'About';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.headerPic = this.activatedRoute.snapshot.data.headerPic;
  }
}
