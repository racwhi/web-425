/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
} src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
    empId: number;
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private users: User[] = [
        { empId: 1, email: 'user1@example.com', password: 'password1' },
        { empId: 2, email: 'user2@example.com', password: 'password2' },
    ];
    
    private authState = new BehaviorSubject<boolean>(false);

    constructor(private cookieService: CookieService) {}

    getAuthState(): Observable<boolean> {
        return this.authState.asObservable();
    }

    signin(email: string, password: string): boolean {
        const foundUser = this.users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            this.cookieService.set('session_user', email);
            this.authState.next(true);
            return true;
        }
        return false;
    }

    signout(): void {
        this.cookieService.delete('session_user');
        this.authState.next(false);
    }
}

*/

//auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface User {
    empId: number;
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private users: User[] = [
        { empId: 1007, email: 'wizardlywand@hogwarts.com', password: 'Alohomora123' },
        { empId: 1008, email: 'quidditchqueen@hogwarts.com', password: 'Quaxle22' },
        { empId: 1009, email: 'potionmaster@hogwarts.com', password: 'Polyjuice99' },
        { empId: 1010, email: 'mugglemania@hogwarts.com', password: 'Dementor0' },
        { empId: 1011, email: 'spellbinder@hogwarts.com', password: 'Expelliarmus88' },
    ];
    
    private authState = new BehaviorSubject<boolean>(false);

    constructor(private cookieService: CookieService, private router: Router) { }

    getAuthState() {
        return this.authState.asObservable();
    }

    signin(email: string, password: string): boolean {
        const user = this.users.find((user) => user.email === email && user.password === password);
        if (user) {
            this.cookieService.set('session_user', email, 1);
            this.authState.next(true);
            return true;
        } else {
            this.authState.next(false);
            return false;
        }
    }

    signout() {
        this.cookieService.deleteAll();
        this.authState.next(false);
        this.router.navigate(['/signin']).then(() => {});
    }
}
