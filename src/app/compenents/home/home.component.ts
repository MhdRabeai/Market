import { Component } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  goods: Good[] = [
    { name: 'apple', price: 5, photoUrl: 'assets/imgs/1.jpg' },
    { name: 'banana', price: 3, photoUrl: 'assets/imgs/2.jpg' },
    { name: 'orange', price: 6, photoUrl: 'assets/imgs/3.jpg' },
    { name: 'strawberry', price: 8, photoUrl: 'assets/imgs/4.jpg' },
  ];
  addToCart(id: number) {
    console.log(this.goods[id]);
  }
}
