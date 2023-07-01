import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './compenents/home/home.component';
import { LoginComponent } from './compenents/login/login.component';
import { SignUpComponent } from './compenents/sign-up/sign-up.component';
import { CartComponent } from './compenents/cart/cart.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { GoodsComponent } from './compenents/goods/goods.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    GoodsComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDP23HIT6jlMPvZTiDuhjK9og6P4oF0Zvk',
        authDomain: 'market-97165.firebaseapp.com',
        projectId: 'market-97165',
        storageBucket: 'market-97165.appspot.com',
        messagingSenderId: '100605208749',
        appId: '1:100605208749:web:a7481d85d96d5727dcfe24',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ngOnInit(): void {}
}
