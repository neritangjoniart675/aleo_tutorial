/*
Filename: sophisticated_code.js

Description: This code is a complex implementation of a banking system. It simulates a
bank with multiple customer accounts, support for deposits, withdrawals, transfers,
and interest calculation. It demonstrates advanced concepts like object-oriented
programming, closures, and error handling.

Please note that this code does not include real security measures or data persistence
and is solely for demonstration purposes.

*/

// Defining a Customer class to represent individual bank customers
class Customer {
  constructor(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
  }

  // Deposit funds into the customer's account
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount");
    }

    this.balance += amount;
    console.log(`${this.name} deposited $${amount}`);
  }

  // Withdraw funds from the customer's account
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid withdrawal amount");
    }

    this.balance -= amount;
    console.log(`${this.name} withdrew $${amount}`);
  }
}

// Defining a Bank class to manage the overall banking operations
class Bank {
  constructor() {
    this.customers = [];
  }

  // Add a new customer to the bank
  addCustomer(name, initialDeposit) {
    if (initialDeposit <= 0) {
      throw new Error("Invalid initial deposit amount");
    }

    const customer = new Customer(name, initialDeposit);
    this.customers.push(customer);
    console.log(`New customer added: ${customer.name}`);
  }

  // Get the customer by name
  getCustomerByName(name) {
    const customer = this.customers.find((c) => c.name === name);
    if (!customer) {
      throw new Error("Customer not found");
    }

    return customer;
  }

  // Transfer funds from one customer to another
  transferFunds(from, to, amount) {
    const fromCustomer = this.getCustomerByName(from);
    const toCustomer = this.getCustomerByName(to);

    fromCustomer.withdraw(amount);
    toCustomer.deposit(amount);

    console.log(`Transferred $${amount} from ${from} to ${to}`);
  }

  // Calculate interest for all customer accounts
  calculateInterest(rate) {
    this.customers.forEach((customer) => {
      const interest = customer.balance * (rate / 100);
      customer.deposit(interest);
      console.log(`${customer.name} earned interest of $${interest}`);
    });
  }
}

// Usage example

const bank = new Bank();
bank.addCustomer("John Doe", 1000);
bank.addCustomer("Jane Smith", 500);

bank.transferFunds("John Doe", "Jane Smith", 200);

bank.calculateInterest(3);

const john = bank.getCustomerByName("John Doe");
console.log(`${john.name}'s balance: $${john.balance}`);

const jane = bank.getCustomerByName("Jane Smith");
console.log(`${jane.name}'s balance: $${jane.balance}`);
