import { Component } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  customerName: string = '';
  email: string = '';
  customerId: string = '';

  submitForm(): void {
    if (this.customerName && this.email && this.customerId) {
      
      console.log('Form submitted');
      console.log('Customer Name:', this.customerName);
      console.log('Email:', this.email);
      console.log('ID:', this.customerId);
    } else {
      console.log('Please fill in all fields');
    }
  }
}
