import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { GoodsComponent } from './compenents/goods/goods.component';
import { CartComponent } from './compenents/cart/cart.component';
import { LoginComponent } from './compenents/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './compenents/home/home.component';
import { SignUpComponent } from './compenents/sign-up/sign-up.component';
import { authGuard } from './Services/guards/auth.guard';
import { userGuard } from './Services/guards/user.guard';
import { adminGuard } from './Services/guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [userGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [userGuard] },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
  },
  { path: 'admin', component: GoodsComponent, canActivate: [adminGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
