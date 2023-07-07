import { setDoc, getFirestore, doc } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  addNewUser(id: any, name: string, address: string) {
    const db = getFirestore();
    const docRef = doc(db, 'users', id);
    return setDoc(docRef, {
      id,
      name,
      address,
      isAdmin: false,
    });
  }
}
