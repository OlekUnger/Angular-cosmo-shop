import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
    public headerPic = false;
    public title = 'Contacts';

    constructor() {
    }

    ngOnInit() {
    }

}
