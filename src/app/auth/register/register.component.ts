import { Component, OnInit } from '@angular/core';
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
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: Message;
  isRegistered = false;
  private subscriptions = new Subscription();


  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private usersService: UsersService
  ) { }

  ngOnInit() {
    this.message = new Message('', 'error');

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.maxLength(15)], this.forbiddenLogin.bind(this)],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        conf_password: ['', [Validators.required, Validators.minLength(6)]],
      }, {validator: this.checkPasswords})

    })
  }

  private checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('conf_password').value;

    return pass === confirmPass  ? null : { notSame: true }
  }

  private forbiddenLogin(control: FormControl): Promise<any> {
    return new Promise((resolve, reject)=>{
      this.usersService.getUserByLogin(control.value)
          .subscribe((user: User)=>{
            if(user) {
              resolve({forbiddenLogin: true})
            } else {
              resolve(null)
            }
          })
    })
  }

  onSubmit() {

    const {login, passwords: {password}, email} = this.registerForm.value;
    const user = new UserModel(login, password, email);
    this.subscriptions.add(
        this.authService.createNewUser(user)
            .subscribe((user: User)=>{
              this.isRegistered = true;
              setTimeout(() => {
                  this.router.navigate(['/auth/login'],
                      {queryParams: {isRegistered: true}}
                      )
              }, 1000)

            })
    )



  }

}
