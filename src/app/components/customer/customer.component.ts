import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/models/customer';
import { CustomerService } from 'app/services/customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
    imports: [HttpClientModule],
})
export class CustomerComponent implements OnInit {
    customers: Customer[] = [];
    newCustomer: Customer = new Customer(0, '', '', '');

    constructor(private customerService: CustomerService) {}

    ngOnInit(): void {
        this.loadCustomers();
    }

    loadCustomers(): void {
        this.customerService.getCustomers().subscribe(data => {
            this.customers = data;
        });
    }

    addCustomer(): void {
        this.customerService.createCustomer(this.newCustomer).subscribe(customer => {
            this.customers.push(customer);
            this.newCustomer = new Customer(0, '', '', ''); // Reset form
        });
    }

    deleteCustomer(id: number): void {
        this.customerService.deleteCustomer(id).subscribe(() => {
            this.customers = this.customers.filter(c => c.id !== id);
        });
    }
}
