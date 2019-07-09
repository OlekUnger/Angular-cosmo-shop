import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-reset-password-form',
    templateUrl: './reset-password-form.component.html',
})
export class ResetPasswordFormComponent implements OnInit {
    @Output() onFlip = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    flip(param: boolean) {
        this.onFlip.emit(param);
    }

}
