import { Router } from '@angular/router';
import { GoodService } from './../../Services/good.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

import { Good } from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  goods: Good[] = [];
  currProductId!: string;
  add: number = -1;
  isFetching = false;
  errorMessage!: string;
  constructor(
    private gs: GoodService,
    private cs: CartService,
    private as: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.sub = this.gs.getAllGoods().subscribe(
      (val) => {
        this.isFetching = false;
        this.goods = val;
      },
      (err) => {
        this.errorMessage = `Can Not Fetch Maybe You Have To Turn On Vpn :${err.message}`;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  addToCart(id: number) {
    this.add = id;
  }
  buy(amount: any) {
    let selectedGood = this.goods[this.add];
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price,
    };
    return new Promise(() => {
      this.as.user.subscribe((user) => {
        if (user) {
          console.log(user);
          this.cs.addToCart(data).then(() => (this.add = -1));
        } else this.router.navigate(['/login']);
      });
    });
  }
}
