import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  setDoc,
  doc,
} from '@angular/fire/firestore';
import {
  ref,
  getDownloadURL,
  getStorage,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class GoodService {
  constructor(private fs: Firestore) {
    this.getAllGoods();
  }
  getAllGoods() {
    const coll = collection(this.fs, 'goods');
    return collectionData(coll, { idField: 'id' });
  }

  addNewGood(name: string, price: number, img: File) {
    const storage = getStorage();

    const mountainsRef = ref(storage, `/goods/${img.name}`);

    return uploadBytes(mountainsRef, img, {
      contentType: 'image/jpeg',
    }).then(() => {
      return getDownloadURL(mountainsRef)
        .then((url) => {
          setDoc(doc(collection(this.fs, 'goods')), {
            name,
            photoUrl: url,
            price,
          }).then(() => console.log('Done Upload'));
        })
        .then(() => console.log('Done Get Url'));
    });
  }
}
