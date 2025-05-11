/*import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  template: `
    <p>
      character-list works!
    </p>
  `,
  styles: ``
})
export class CharacterListComponent {

}*/

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component'; // Import the Character interface

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="character-list">
      <h3>Created Characters</h3>
      <ng-container *ngIf="characters && characters.length > 0; else emptyList">
        <ul>
          <li *ngFor="let character of characters">
            {{ character.id }}: {{ character.name }}, {{ character.gender }},
            {{ character.class }}
          </li>
        </ul>
      </ng-container>
      <ng-template #emptyList>
        <p class="empty-list-message">No characters created yet.</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .character-list {
        margin-top: 20px;
        border-top: 1px solid #eee;
        padding-top: 20px;
      }
      .empty-list-message {
        font-style: italic;
        color: #777;
      }
    `,
  ],
})
export class CharacterListComponent {
  @Input() characters: Character[] = []; // Declare the input property
}

