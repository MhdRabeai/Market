import { Injectable } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { AuthService } from './auth.service';
import {
  setDoc,
  getFirestore,
  doc,
  collection,
  collectionData,
  deleteDoc,
} from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private as: AuthService) {}
  addToCart(data: Good) {
    const coll = collection(getFirestore(), `users/${this.as.userId}/cart`);
    return setDoc(doc(coll), data);
  }
  getCart() {
    const coll = collection(getFirestore(), `users/${this.as.userId}/cart`);
    return collectionData(coll, { idField: 'id' });
  }

  deleteCart(id: any) {
    return deleteDoc(doc(getFirestore(), `users/${this.as.userId}/cart/${id}`));
  }
  saveCart(id: any, amount: any) {
    return updateDoc(
      doc(getFirestore(), `users/${this.as.userId}/cart/${id}`),
      {
        amount,
      }
    );
  }
  editGood(id: any, price: any) {
    return updateDoc(doc(getFirestore(), `goods/${id}`), {
      price,
    });
  }
  deleteGood(id: any) {
    return deleteDoc(doc(getFirestore(), `goods/${id}`));
  }
}
