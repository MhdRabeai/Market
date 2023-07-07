import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  isAuth = false;

  constructor(private as: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.as.user.subscribe((use) => {
      if (use) {
        this.isAuth = true;
        this.as.userId = use.uid;
      } else {
        this.isAuth = false;
        this.as.userId = '';
      }
    });
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
  logout() {
    this.as.logout();
    this.router.navigate(['/']);
  }
}
