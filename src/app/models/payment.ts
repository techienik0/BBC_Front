export enum PaymentMethod {
    CREDIT_CARD = 'CREDIT_CARD',
    DEBIT_CARD = 'DEBIT_CARD',
    PAYPAL = 'PAYPAL',
    BANK_TRANSFER = 'BANK_TRANSFER',
  }
  
  export class Payment {
    id!: number;
    bill!: any;
    amountPaid!: number;
    paymentDate!: Date;
    paymentMethod!: PaymentMethod;
    isSuccessful!: boolean;
  }
  