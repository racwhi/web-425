/*import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <p>
      players works!
    </p>
  `,
  styles: ``
})
export class PlayersComponent {

}*/
//players.component.ts
export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { AppComponent } from '../app.component';


@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="characters-container">
      <h1>Characters</h1>
      <div class="characters-grid">
        <div class="character-card" *ngFor="let character of characters">
          <h2>{{ character.name }}</h2>
          <p>Gender: {{ character.gender }}</p>
          <p>Class: {{ character.class }}</p>
          <p>Faction: {{ character.faction }}</p>
          <p>Starting Location: {{ character.startingLocation }}</p>
          <p>Fun Fact: {{ character.funFact }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
  .characters-grid { 
    display: flex; 
    flex-wrap: wrap; 
    list-style-type: none; 
    padding: 0;
}
.character-card {
flex: 0 1 calc(33.33% - 20px);
margin: 10px;
box-shadow: 0 4px 8px rgba(1, 1, 1, 0.1);
padding: 30px;
 }

  `,
  ],
})
export class PlayersComponent {
  characters: Character[];

  constructor() {
    this.characters = [
      {
        name: 'Honor',
        gender: 'Male',
        class: 'Warrior',
        faction: 'The Fire hood',
        startingLocation: 'Firehold',
        funFact: 'Honor thinks in fire.',
      },
      {
        name: 'Liz',
        gender: 'Female',
        class: 'Mage',
        faction: 'The Mystic ',
        startingLocation: 'Silverwood',
        funFact: 'Control the weather.',
      },
      {
        name: 'Peter',
        gender: 'Male',
        class: 'Rogue',
        faction: 'The Shadow ',
        startingLocation: 'Shade Passage',
        funFact: 'Shadow powers, can become anyones shadow.',
      },
      {
        name: 'Amileia',
        gender: 'Female',
        class: 'Mage',
        faction: 'The Mystic ',
        startingLocation: 'Mystic Cliff',
        funFact: 'Can communicate with animals.',
      },
      {
        name: 'Cinder',
        gender: 'Male',
        class: 'Warrior',
        faction: 'The Fire hood',
        startingLocation: 'Fire Gate',
        funFact: 'Powers include fire',
      },
      {
        name: 'Nedphen',
        gender: 'Male',
        class: 'Rogue',
        faction: 'The Shadow ',
        startingLocation: 'Dark Woods',
        funFact: 'Can see beyond shadows.',
      },
      {
        name: 'Menissa',
        gender: 'Female',
        class: 'Mage',
        faction: 'The Mystic ',
        startingLocation: 'Moonlit ',
        funFact: 'Has star powers.',
      },
      {
        name: 'Bane',
        gender: 'Male',
        class: 'Warrior',
        faction: 'The Fire hood',
        startingLocation: 'Forge City',
        funFact: 'Can battle with many swords.',
      },
      {
        name: 'Lana',
        gender: 'Female',
        class: 'Rogue',
        faction: 'The Shadow ',
        startingLocation: 'Star Shadows',
        funFact: ' expert in animals.',
      },
      {
        name: 'Keys',
        gender: 'Female',
        class: 'Warrior',
        faction: 'The Fire hood',
        startingLocation: 'Fort Lane',
        funFact: 'expert of all powers.',
      },
    ];
  }
}

