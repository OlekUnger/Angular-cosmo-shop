import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-enter-form',
    templateUrl: './enter-form.component.html'
})
export class EnterFormComponent implements OnInit {
    @Output() onFlip = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    flip(param: boolean) {
        this.onFlip.emit(param);
    }

}
