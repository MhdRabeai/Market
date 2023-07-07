import { Shopping } from './../../interfaces/shopping.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Shopping[] = [];
  isFetching = false;
  errorMessage!: string;
  sub!: Subscription;
  constructor(private cs: CartService) {}
  ngOnInit(): void {
    this.isFetching = true;
    this.sub = this.cs.getCart().subscribe(
      (val) => {
        this.cart = val;
        this.isFetching = false;
      },
      (err) => {
        this.errorMessage = `Can Not Fetch Maybe You Have To Turn On Vpn :${err.message}`;
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  delete(id: any) {
    this.cs.deleteCart(this.cart[id].id);
  }
  save(id: any) {
    this.cs.saveCart(this.cart[id].id, this.cart[id].amount);
  }
}
