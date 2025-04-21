/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
*/
//app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="wrapper">
      <header class="banner">
        <h1>Portfolio</h1>
      </header>

      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Landing</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/projects">Projects</a></li>
          <li><a routerLink="/resume">Resume</a></li>
        </ul>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Landing</a> |<a routerLink="/about">About</a>|
          <a routerLink="/projects">Projects</a> |
          <a routerLink="/resume">Resume</a>
        </nav>
        <p>© Portfolio</p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'portfolio';
}
