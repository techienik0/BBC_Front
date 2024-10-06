export class Customer {
  id?: number;
  customerId: number;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(customerId: number, name: string, email: string, phoneNumber: string) {
      this.customerId = customerId;
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
  }
}
