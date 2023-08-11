import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  customerId: string = '';
  pin: string = '';

  submitForm(): void {
    if (this.customerId && this.pin) {
      console.log('Sign-in form submitted');
      console.log('Customer ID:', this.customerId);
      console.log('PIN:', this.pin);
    } else {
      console.log('Please fill in all fields');
    }
  }
}
