/*import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

*/
//auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  if (cookieService.get('session_user')) {
    return true;
  } else {
    router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
