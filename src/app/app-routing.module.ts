import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { GoodsComponent } from './compenents/goods/goods.component';
import { CartComponent } from './compenents/cart/cart.component';
import { LoginComponent } from './compenents/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenents/home/home.component';
import { SignUpComponent } from './compenents/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: GoodsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
