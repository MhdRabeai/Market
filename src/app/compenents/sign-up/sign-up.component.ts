import { UserService } from './../../Services/user.service';
import { user } from './../../interfaces/user.interface';
import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  isFetching = false;
  errorMessage!: string;
  constructor(
    private as: AuthService,
    private us: UserService,
    private router: Router
  ) {}
  onSubmit(form: NgForm) {
    this.isFetching = true;
    let data: user = form.value;

    this.as
      .signup(data.email, data.password)
      .then((res) => {
        this.us.addNewUser(res.user?.uid, data.name, data.address).then(() => {
          this.isFetching = false;
          this.router.navigate(['/']);
        });
      })
      .catch((err) => {
        this.errorMessage = `Can Not Fetch Maybe You Have To Turn On Vpn :${err.message}`;
      });
  }
}
