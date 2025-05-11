//character-faction.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CharacterFactionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch factions when fetchFactions() is called', () => {
    const mockFactions = [
      { id: 1, name: 'Test1', description: 'First faction' },
      { id: 2, name: 'Test2', description: 'Second faction' },
    ];


    component.fetchFactions();

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/characterfactions'
    );
    expect(req.request.method).toBe('GET');


    req.flush(mockFactions);


    expect(component.factions.length).toBe(2);
    expect(component.factions).toEqual(mockFactions);
    expect(component.errorMessage).toBe('');
  });

  it('should handle server error in fetchFactions()', () => {
    component.fetchFactions();

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/characterfactions'
    );
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });

    expect(component.factions.length).toBe(0);
    expect(component.errorMessage).toBe('Server error: 404');
  });

  it('should show loading message initially', () => {
    component.factions = [];
    component.errorMessage = '';
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Loading factions...');
  });


});
