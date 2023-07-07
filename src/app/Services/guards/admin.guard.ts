import { AuthService } from 'src/app/Services/auth.service';
import { inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';
import {
  getFirestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

export const adminGuard: CanActivateFn = (route, state) => {
  const as = inject(AuthService);
  const router = inject(Router);
  const com = collectionData(collection(getFirestore(), 'users/')).subscribe(
    (res) =>
      res.forEach((e) => {
        if (e['id'] === as.userId && e['isAdmin'] === true) {
          as.IsAdmin = true;
        } else as.IsAdmin = false;
      })
  );

  return new Promise((res) => {
    if (as.IsAdmin) {
      res(true);
    } else router.navigate(['/']);
  });
};
