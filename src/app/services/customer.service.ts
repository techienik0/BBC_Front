import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  // Get all customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/getAllCustomers`);
  }

  // Get customer by ID
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/getCustomerById/${id}`);
  }

  // Add a new customer
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/addCustomer`, customer);
  }

  // Update an existing customer
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/${customer.id}`, customer);
  }

  // Delete a customer
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Bulk upload customers
  bulkUploadCustomers(file: File): Observable<string[]> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<string[]>(`${this.baseUrl}/uploadCustomers`, formData);
  }

  // Method to get the count of customers
  getCustomersCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  // Method to get the count of monthly bills
  getMonthlyBillsCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/monthlyBills/count`);
  }
}
