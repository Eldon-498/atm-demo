import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  customerName: string = '';
  customerId: string = '';
  accountBalance: number = 0;
  withdrawAmount: number = 0;
  depositAmount: number = 0;
  showWithdrawForm: boolean = false;
  showDepositForm: boolean = false;

  toggleWithdrawForm() {
    this.showWithdrawForm = !this.showWithdrawForm;
    this.showDepositForm = false; // Hide deposit form
  }
  
  toggleDepositForm() {
    this.showDepositForm = !this.showDepositForm;
    this.showWithdrawForm = false; // Hide withdraw form
  }

}
