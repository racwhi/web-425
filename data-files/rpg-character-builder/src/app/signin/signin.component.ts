/*import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  template: `
    <p>
      signin works!
    </p>
  `,
  styles: ``
})
export class SigninComponent {

}
*/
//sign.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: `
        <div class="signin-form-container">
            <form [formGroup]="signinForm" (ngSubmit)="onSubmit()" class="signin-form">
                <h1>Complete the form below to sign in.</h1>
                <fieldset>
                    <legend>User Sign In</legend>

                    <label for="email">Email</label>
                    <input formControlName="email" type="email" id="email" name="email" />
                    <small class="error" *ngIf="signinForm.controls['email'].touched && signinForm.controls['email'].hasError('required')">Email is required.</small>
                    <small class="error" *ngIf="signinForm.controls['email'].touched && signinForm.controls['email'].hasError('email')">Invalid email address.</small>

                    <label for="password">Password</label>
                    <input formControlName="password" id="password" type="password" />
                    <small class="error" *ngIf="signinForm.controls['password'].touched && signinForm.controls['password'].hasError('required')">Password is required.</small>
                    <small class="error" *ngIf="signinForm.controls['password'].touched && signinForm.controls['password'].hasError('pattern')">Password must be at least 8 characters long and contain at least one uppercase letter and one number.</small>

                    <input type="submit" [disabled]="!signinForm.valid" value="Sign In" />
                </fieldset>
            </form>
        </div>
    `,
    styles: [`
        .signin-form-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .signin-form {
            flex: 1;
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
        }
        label, input {
            display: block;
            margin-bottom: 5px;
        }
        input, input[type="submit"] {
            padding: 8px;
            box-sizing: border-box;
            width: 100%;
        }
        input[type="submit"] {
            margin-top: 10px;
            float: right;
        }
        .error {
            color: red;
            padding: 5px;
        }
    `]
})
export class SigninComponent {
    signinForm: FormGroup = this.fb.group({
        email: [null, Validators.compose([Validators.required, Validators.email])],
        password: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)])],
    });

    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

    onSubmit() {
        const email = this.signinForm.controls['email'].value;
        const password = this.signinForm.controls['password'].value;

        if (this.authService.signin(email, password)) {
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
            this.router.navigate([returnUrl]);
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }
}
