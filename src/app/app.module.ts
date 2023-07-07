import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './compenents/home/home.component';
import { LoginComponent } from './compenents/login/login.component';
import { SignUpComponent } from './compenents/sign-up/sign-up.component';
import { CartComponent } from './compenents/cart/cart.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { GoodsComponent } from './compenents/goods/goods.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { MultiPipe } from './pipes/multi.pipe';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { DatabaseModule } from '@angular/fire/database';

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
    MultiPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    AngularFireAuthModule,
    DatabaseModule,
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
