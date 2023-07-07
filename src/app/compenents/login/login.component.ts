import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage!: string;
  constructor(private as: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    let data = form.value;

    this.as
      .login(data['email'], data['password'])
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.errorMessage = err.message;
      });
  }
}
