// src/app/auth.guard.spec.ts
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { authGuard } from './auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('authGuard', () => {
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
  const mockRouterStateSnapshot = { url: '/test'} as RouterStateSnapshot;

  beforeEach(() => {

    cookieServiceSpy = jasmine.createSpyObj('CookieService', ['get']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    // Configure  testing module
    TestBed.configureTestingModule({
      providers: [
        { provide: CookieService, useValue: cookieServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
  });

  it('should allow access if session_user cookie exists', () => {
    cookieServiceSpy.get.and.returnValue('some-user');

    /*const result = authGuard(
      mockActivatedRouteSnapshot,
      mockRouterStateSnapshot*/
      const result = TestBed.runInInjectionContext(()=>
      authGuard(mockActivatedRouteSnapshot, mockRouterStateSnapshot)
    ); // Call the guard
    expect(result).toBeTrue();
  });

  it('should deny access and navigate to signin if session_user cookie does not exist', () => {
    cookieServiceSpy.get.and.returnValue('');

   /* const result = authGuard(
      mockActivatedRouteSnapshot,
      mockRouterStateSnapshot*/
       const result = TestBed.runInInjectionContext(() =>
         authGuard(mockActivatedRouteSnapshot, mockRouterStateSnapshot)
       ); // Call the guard
    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/signin'], {
      queryParams: { returnUrl: mockRouterStateSnapshot.url },
    });
  });
});
