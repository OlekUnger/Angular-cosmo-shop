import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    public headerPic = false;
    public title = 'Contacts';

    constructor() {
    }

    ngOnInit() {
    }

}
