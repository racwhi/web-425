/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

// src/app/create-guild/create-guild.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a guild successfully if the form is valid', () => {
    component.guildForm.setValue({
      guildName: 'Test Guild',
      description: 'A guild for testing.',
      type: 'Casual',
      acceptTerms: true,
      notificationPreference: 'Email',
    });
    component.onSubmit();
    fixture.detectChanges();

    expect(component.createdGuilds.length).toBe(1);
    expect(component.createdGuilds[0].guildName).toEqual('Test Guild');
  });

  it('should not create a guild if the form is invalid', () => {
    component.guildForm.setValue({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: '',
    });
    component.onSubmit();
    fixture.detectChanges();

    expect(component.createdGuilds.length).toBe(0);
  });
});
