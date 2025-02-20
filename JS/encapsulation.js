class BankAccount {
    #balance; // private field
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}. New Balance: ${this.#balance}`);
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount(100);
  account.deposit(50);    // Deposited: 50. New Balance: 150
  account.withdraw(30);   // Withdrew: 30. New Balance: 120
  // account.#balance;    // Error: Cannot access private field directly
  