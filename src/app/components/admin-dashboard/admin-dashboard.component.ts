import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'app/classes/transaction';
import { TransactionService } from 'app/services/transaction.service';
import { CustomerService } from 'app/services/customer.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [HttpClientModule],
})
export class AdminDashboardComponent implements OnInit {

  transactions: Transaction[] = [];
  customersCount: number = 0;
  monthlyBillsCount: number = 0;

  constructor(private transactionService: TransactionService, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getTransactions();
    this.getCustomersCount();
    this.getMonthlyBillsCount();
  }

  getTransactions(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (response) => {
        this.transactions = response;
        console.log(response);
      }
    });
  }

  getCustomersCount(): void {
    this.customerService.getCustomersCount().subscribe({
      next: (response) => {
        this.customersCount = response;
      }
    });
  }

  getMonthlyBillsCount(): void {
    this.customerService.getMonthlyBillsCount().subscribe({
      next: (response) => {
        this.monthlyBillsCount = response;
      }
    });
  }

  onCustomers() {
    setTimeout(() => {
      this.router.navigate(['customers']);
    }, 500);
  }

  onMonthlyBills() {
    setTimeout(() => {
      this.router.navigate(['monthlyBills']);
    }, 500);
  }

  onTransactions() {
    setTimeout(() => {
      this.router.navigate(['transactions']);
    }, 500);
  }
}
