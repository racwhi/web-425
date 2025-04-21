/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// src/app/signin/signin.component.spec.ts

*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

class MockAuthService {
  signin(email: string, password: string) {
    return email === 'valid@example.com' && password === 'correctpassword';
  }
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, SigninComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signin method on form submit', () => {
    const signInSpy = spyOn(authService, 'signin').and.callThrough();
    component.signinForm.controls['email'].setValue('valid@example.com');
    component.signinForm.controls['password'].setValue('correctpassword');
    component.onSubmit();

    expect(signInSpy).toHaveBeenCalledWith(
      'valid@example.com',
      'correctpassword'
    );
  });

  it('should alert on invalid email or password', () => {
    spyOn(window, 'alert');
    component.signinForm.controls['email'].setValue('invalid@example.com');
    component.signinForm.controls['password'].setValue('WrongPassword');
    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith(
      'Invalid email or password. Please try again.'
    );
  });
});
