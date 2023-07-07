import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Observable<any>;
  userId!: string;
  IsAdmin: boolean = false;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.user;
  }
  signup(email: string, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.afAuth.signOut();
  }
}
