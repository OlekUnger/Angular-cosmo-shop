import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appFlip]'
})
export class FlipDirective {
    constructor() {}
    @Input('appFlip') flip: boolean;
    @HostBinding('class.flip') isFlip = this.flip;

    @HostListener('click', ['$event']) onClick(event: Event) {
        event.stopPropagation();
        const target = event.target as HTMLTextAreaElement;
        if (target.classList.contains('btn-flip')) {
            this.isFlip = !this.isFlip;
        }
    }
}

/* директива для переворачивания элемента обратной стороной
   Самому элементу присвоить [appFlip]="true"
   Кнопкам, на которых это должно срабатывать - добавить класс 'btn-flip'
 */
