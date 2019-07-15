import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../shared/services/users.service';
import {User} from '../../../shared/interfaces/user';
import {Message} from '../../../shared/models/message.model';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-enter-form',
    templateUrl: './enter-form.component.html'
})
export class EnterFormComponent implements OnInit, OnDestroy {
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
                    if (params['isRegistered']) {
                        this.showMessage('Можете войти в систему', 'success')
                    } else if(params['accessDenied']){
                        this.showMessage('Необходимо войти в систему', 'error')
                    }
                })
        );

        let user = this.authService.loginIfRemembered();

        this.enterForm = new FormGroup({
            login: new FormControl(this.getField(user, 'login'), [Validators.required, Validators.maxLength(15)]),
            password: new FormControl(this.getField(user, 'password'), [Validators.required, Validators.minLength(6)]),
            remember: new FormControl(this.getField(user, 'remember'), [])
        });
    }

    private showMessage(text: string, type: string = 'danger') {
        this.message = new Message(text, type);
        window.setTimeout(() => {
            this.message.text = '';
        }, 3000);
    }

    private getField(data, field) {
        if (data && data.hasOwnProperty(field)) {
            return data[field];
        }
        return '';
    }

    onSubmit() {
        const formData = this.enterForm.value;
        this.subscriptions.add(
            this.authService.getUserByParam(formData.login, 'login')
                .subscribe((user: User) => {
                    if (user) {
                        if (user.password === formData.password) {
                            this.message.text = '';
                            this.authService.login(user);
                            if (formData.remember) {
                                this.authService.remember(user);
                            }
                            this.router.navigate(['/']);
                        } else {
                            this.showMessage('Неправильный пароль');
                        }
                    } else {
                        this.showMessage('Такого пользователя не существует');
                    }
                })
        );

    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }


}
