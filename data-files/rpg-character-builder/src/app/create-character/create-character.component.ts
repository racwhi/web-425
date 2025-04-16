/*import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [],
  template: `
    <p>
      create-character works!
    </p>
  `,
  styles: ``
})
export class CreateCharacterComponent {

}*/


// create-character.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="create-character">
      <h2>Create Character</h2>
      <form #characterForm="ngForm" (ngSubmit)="onSubmit(characterForm)">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" [(ngModel)]="name" required>
        </div>

        <div>
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" [(ngModel)]="gender" required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label for="class">Class:</label>
          <select id="class" name="class" [(ngModel)]="class" required>
            <option value="" disabled>Select Class</option>
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Rogue">Rogue</option>
          </select>
        </div>

        <button type="submit">Create Character</button>
        <button type="button" (click)="resetForm()">Reset</button>
      </form>

      <h2>Created Characters</h2>
      <ul>
        <li *ngFor="let character of characters">
          {{character.id}}: {{character.name}}, {{character.gender}}, {{character.class}}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .create-character {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    h2 {
      color: #333;
    }

    form {
      margin-bottom: 20px;
    }

    div {
      margin-bottom: 10px;
    }

    button {
      margin-right: 10px;
    }
  `]
})
export class CreateCharacterComponent {
  characters: Character[] = [];
  name: string = '';
  gender: string = '';
  class: string = '';

  onSubmit(form: any) {
    const newCharacter: Character = {
      id: this.generateRandomId(),
      name: form.value.name,
      gender: form.value.gender,
      class: form.value.class,
    };
    this.characters.push(newCharacter);
    this.resetForm();  
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1; // Random ID between 1 and 1000
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.class = '';

  
  }
}

