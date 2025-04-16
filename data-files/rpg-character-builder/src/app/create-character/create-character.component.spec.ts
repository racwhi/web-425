/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/



// create-character.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        CreateCharacterComponent, 
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    const randomId = component.generateRandomId();
    expect(randomId).toBeGreaterThan(0);
    expect(randomId).toBeLessThan(1001);
  });

  it('should add a character with correct customization', () => {
    const characterForm = {
      value: {
        name: 'Hero',
        gender: 'Male',
        class: 'Warrior'
      }
    };
    component.onSubmit(characterForm);
    
    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Hero');
    expect(component.characters[0].gender).toBe('Male');
    expect(component.characters[0].class).toBe('Warrior');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
  
    component.name = 'Peter';
    component.gender = 'Male';
    component.class = 'Warrior';

    component.resetForm(); 

    expect(component.name).toBe(''); 
    expect(component.gender).toBe(''); 
    expect(component.class).toBe('');

  });
});
