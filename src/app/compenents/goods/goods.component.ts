import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { CartService } from 'src/app/Services/cart.service';
import { GoodService } from 'src/app/Services/good.service';

import { Good } from 'src/app/interfaces/good.interface';
import { Shopping } from 'src/app/interfaces/shopping.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  goods: Good[] = [];
  cart: Shopping[] = [];
  isFetching = false;
  errorMessage!: string;
  constructor(private gs: GoodService, private cs: CartService) {}
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
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  @ViewChild('image') image!: ElementRef<any>;
  AddNewGood(form: NgForm) {
    let name = form.value.name;
    let price = form.value.price;
    let img = this.image.nativeElement.files[0];

    this.gs.addNewGood(name, price, img);
  }
  delete(id: any) {
    this.cs.deleteGood(this.goods[id].id);
  }
  save(id: any) {
    this.cs.editGood(this.goods[id].id, this.goods[id].price);
  }
}
