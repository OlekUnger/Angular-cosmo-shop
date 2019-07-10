import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../shared/services/users.service';
import {User} from '../../../shared/interfaces/user';
import {Message} from '../../../shared/models/message.model';
import {AuthService} from '../../../shared/services/auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-enter-form',
    templateUrl: './enter-form.component.html'
})
export class EnterFormComponent implements OnInit, OnDestroy {
    @Output() onFlip = new EventEmitter<boolean>();

    enterForm: FormGroup;
    message: Message;
    private subscriptions = new Subscription();

    constructor(
        private usersService: UsersService,
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.message = new Message('', '');
        this.subscriptions.add(
            this.activatedRoute.queryParams
                .subscribe((params: Params) => {
                    this.showMessage('Можете войти в систему', 'success')
                })
        );


        this.enterForm = new FormGroup({
            login: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            remember: new FormControl(false, [])
        });
    }

    private showMessage(text: string, type: string = 'danger') {
        this.message = new Message(text, type);
        window.setTimeout(() => {
            this.message.text = '';
        }, 3000);
    }

    onSubmit() {
        const formData = this.enterForm.value;
        this.subscriptions.add(
            this.usersService.getUserByLogin(formData.login)
                .subscribe((user: User) => {
                    if (user) {
                        if (user.password === formData.password) {
                            this.message.text = '';
                            this.authService.login(user);
                            this.router.navigate(['/']);
                        } else {
                            this.showMessage('Неправильный пароль');
                        }
                    } else {
                        this.showMessage('Такогоо пользователя не существует');
                    }
                })
        );

    }

    flip(param: boolean) {
        this.onFlip.emit(param);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }


}
