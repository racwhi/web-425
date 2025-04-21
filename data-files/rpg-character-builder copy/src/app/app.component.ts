
//app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="wrapper">
      <header class="banner">
        <h1>RPG Character Builder</h1>
      </header>

      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
          <li><a routerLink="/signin">Sign In</a></li>
        </ul>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a routerLink="/players">Players</a> |
          <a routerLink="/create-character">Create Character</a> |
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/character-faction">Character Faction</a>|
          <a routerLink="/signin">Sign In</a>
        </nav>
        <p>© 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  email?: string;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  signout() {
    this.authService.signout();
  }
}

