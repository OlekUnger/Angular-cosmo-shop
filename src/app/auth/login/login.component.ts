import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    resetForm = false;

    constructor() {
    }

    ngOnInit() {

    }

    onFlip(param: boolean) {
        this.resetForm = param;
    }

}
