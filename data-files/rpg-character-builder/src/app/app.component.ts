import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="wrapper">
      <header class="banner" >
        <h1>RPG Character Builder</h1>
      </header>
      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main class="main-content">
        <router-outlet />
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a href="#">Characters</a> |
          <a href="#">About</a> | <a href="#">Contact</a>
        </nav>
        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'rpg-character-builder';
}
