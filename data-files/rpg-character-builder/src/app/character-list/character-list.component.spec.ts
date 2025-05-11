/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { Character } from '../create-character/create-character.component'; // Import the Character interface

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1 (Suggestion): characters in the newly created component are displaying correctly.
  it('should display the list of characters', () => {
    const testCharacters: Character[] = [
      { id: 1, name: 'San', gender: 'Male', class: 'Warrior' },
      { id: 2, name: 'Santos', gender: 'Male', class: 'Mage' },
      { id: 3, name: 'Sai', gender: 'Male', class: 'Rogue' }
    ];
    component.characters = testCharacters; // Set the input property
    fixture.detectChanges(); // Trigger change detection to update the view

    const characterElements = fixture.nativeElement.querySelectorAll('li');
    expect(characterElements.length).toBe(testCharacters.length);

    expect(characterElements[0].textContent).toContain('1: San, Male, Warrior');
    expect(characterElements[1].textContent).toContain('2: Santos, Male, Mage');
    expect(characterElements[2].textContent).toContain('3: Sai, Male, Rogue');
  });

  // Test 4 (Suggestion): should display a message for an empty character list.
  it('should display a message when the character list is empty', () => {
    component.characters = []; // Set the input property to an empty array
    fixture.detectChanges();

    const emptyMessageElement = fixture.nativeElement.querySelector('.empty-list-message');
    expect(emptyMessageElement).toBeTruthy();
    expect(emptyMessageElement.textContent).toContain('No characters created yet.');
  });

});
