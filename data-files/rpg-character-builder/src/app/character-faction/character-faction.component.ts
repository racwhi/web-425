//character-faction.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="character-factions">
      <h2>Available Character Factions</h2>
      <div *ngIf="errorMessage" class="error">{{ errorMessage }}</div>
      <table *ngIf="factions.length > 0" class="factions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let faction of factions">
            <td>{{ faction.id }}</td>
            <td>{{ faction.name }}</td>
            <td>{{ faction.description }}</td>
          </tr>
        </tbody>
      </table>
      <div *ngIf="factions.length === 0 && !errorMessage">
        Loading factions...
      </div>
    </div>
  `,
  styles: `
    .character-factions {
      margin: 20px;
      font-family: Arial, sans-serif;
    }
    .factions-table {
      width: 100%;
      border-collapse: collapse;
    }
    .factions-table th,
    .factions-table td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
    .factions-table th {
      background-color: #f4f4f4;
    }
    .error {
      color: red;
      font-weight: bold;
      margin-bottom: 10px;
    }
  `,
})
export class CharacterFactionComponent {
  factions: Array<{ id: number; name: string; description?: string }> = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  // Method to fetch factions, called  in tests
  fetchFactions() {
    this.http
      .get<Array<{ id: number; name: string; description?: string }>>(
        'http://localhost:3000/api/characterfactions'
      )
      .subscribe({
        next: (data) => {
          this.factions = data;
          this.errorMessage = '';
        },
        error: (err) => {
          if (err.status) {
            this.errorMessage = 'Server error: ' + err.status;
          } else {
            this.errorMessage = 'Error fetching factions.';
          }
          this.factions = [];
        },
      });
  }
}
