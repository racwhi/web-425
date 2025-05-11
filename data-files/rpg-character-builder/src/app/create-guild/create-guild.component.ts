/*import { Component } from '@angular/core';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [],
  template: `
    <p>
      create-guild works!
    </p>
  `,
  styles: ``
})
export class CreateGuildComponent {

}

*/
//create-guild.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { Guild } from './guild.model';

//Define Guild interface
interface Guild{
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference:string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <h1>Create Guild</h1>
    <form [formGroup]="guildForm" (ngSubmit)="onSubmit()" >
      <div>
        <label for="guildName">Guild Name:</label>
        <input id="guildName" formControlName="guildName" required />
        <div
          *ngIf="
            guildForm.get('guildName')?.invalid &&
            guildForm.get('guildName')?.touched
          "
        >
          <small class="error">Guild Name is required.</small>
        </div>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea
          id="description"
          formControlName="description"
          required
        ></textarea>
        <div
          *ngIf="
            guildForm.get('description')?.invalid &&
            guildForm.get('description')?.touched
          "
        >
          <small class="error">Description is required.</small>
        </div>
      </div>
      <div>
        <label for="type">Type:</label>
        <select id="type" formControlName="type" required>
          <option value="">Select a type</option>
          <option value="Competitive">Competitive</option>
          <option value="Casual">Casual</option>
          <option value="Social">Social</option>
          <option value="Educational">Educational</option>
        </select>
        <div
          *ngIf="
            guildForm.get('type')?.invalid && guildForm.get('type')?.touched
          "
        >
          <small class="error">Type is required.</small>
        </div>
      </div>
      <div>
        <label>
          <input type="checkbox" formControlName="acceptTerms" required />
          I accept the Terms and Conditions
        </label>
        <div
          *ngIf="
            guildForm.get('acceptTerms')?.invalid &&
            guildForm.get('acceptTerms')?.touched
          "
        >
          <small class="error">You must accept the terms.</small>
        </div>
      </div>
      <div>
        <label>Notification Preference:</label>
        <div>
          <label
            ><input
              type="radio"
              formControlName="notificationPreference"
              value="Email"
            />
            Email</label
          >
          <label
            ><input
              type="radio"
              formControlName="notificationPreference"
              value="SMS"
            />
            SMS</label
          >
          <label
            ><input
              type="radio"
              formControlName="notificationPreference"
              value="In-App"
            />
            In-App</label
          >
        </div>
        <div
          *ngIf="
            guildForm.get('notificationPreference')?.invalid &&
            guildForm.get('notificationPreference')?.touched
          "
        >
          <small class="error">Notification Preference is required.</small>
        </div>
      </div>
      <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
    </form>

    <h2>Created Guilds</h2>
    <ul>
      <li *ngFor="let guild of createdGuilds">
        <strong>{{ guild.guildName }}</strong
        >: {{ guild.description }} - {{ guild.type }} ({{
          guild.notificationPreference
        }})
      </li>
    </ul>
  `,
  styles: [
    `
      .error {
        color: red;
      }
    `,
  ],
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  createdGuilds: Guild[] = [];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.guildForm.valid) {
      const newGuild: Guild = this.guildForm.value as Guild;
      this.createdGuilds.push(newGuild);
      this.guildForm.reset({
        guildName: '',
        description: '',
        type: '',
        acceptTerms: false,
        notificationPreference: '',
      });
    }
  }
}
