import { AuthService } from 'src/app/Services/auth.service';
import { inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const as = inject(AuthService);
  const router = inject(Router);
  return new Promise((res) => {
    as.user.subscribe((user) => {
      if (!user) {
        res(true);
      } else router.navigate(['/']);
    });
  });
};
