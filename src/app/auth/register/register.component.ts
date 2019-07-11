import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../shared/models/message.model';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {UserModel} from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {User} from '../../shared/interfaces/user';
import {UsersService} from '../../shared/services/users.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    message: Message;
    isRegistered = false;
    private subscriptions = new Subscription();

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private usersService: UsersService
    ) {
    }

    ngOnInit() {
        this.message = new Message('', 'error');

        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email], this.forbiddenField('email').bind(this)],
            login: ['', [Validators.required, Validators.maxLength(15)], this.forbiddenField('login').bind(this)],
            passwords: this.fb.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                conf_password: ['', [Validators.required, Validators.minLength(6)]],
            }, {validator: this.checkPasswords})

        });
    }

    private checkPasswords(group: FormGroup) {
        let pass = group.get('password').value;
        let confirmPass = group.get('conf_password').value;

        return pass === confirmPass ? null : {notSame: true};
    }

    private forbiddenField = (value: string) => (control: FormControl): Promise<any> => {
        return new Promise((resolve, reject) => {
            this.subscriptions.add(this.authService.getUserByParam(control.value, value)
                .subscribe((user: User) => {
                    if (user) {
                        resolve({duplicate: true});
                    } else {
                        resolve(null);
                    }
                })
            );
        });
    };

    onSubmit() {

        const {login, passwords: {password}, email} = this.registerForm.value;
        const user = new UserModel(login, password, email);
        this.subscriptions.add(
            this.authService.register(user)
                .subscribe((user: User) => {
                    this.isRegistered = true;
                    setTimeout(() => {
                        this.router.navigate(['/auth/login'],
                            {queryParams: {isRegistered: true}}
                        );
                    }, 1000);
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

}
