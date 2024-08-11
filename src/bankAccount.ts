class BankAccount {
  private _balance: number;
  private _accountHolderName: string;
  private _accountNumber: number;

  constructor(
    intialbalance: number,
    accountHolderName: string,
    accountNumber: number
  ) {
    this._balance = intialbalance;
    this._accountHolderName = accountHolderName;
    this._accountNumber = accountNumber;
  }

  get accountHolderName() {
    return this._accountHolderName;
  }

  set accountHolderName(value: string) {
    if (value.length > 0) {
      this._accountHolderName = value;
    } else console.log("you cant enter empty Name");
  }

  get balance() {
    return this._balance;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this._balance}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount: number) {
    if (amount > 0 && amount <= this._balance) {
     this._balance -=amount
      console.log(`withdraw${amount}.new balnce is ${this._balance}`);
    } else console.log("invalid withdraw amount");
  }
}
function testBankAccountClass() {
  let account = new BankAccount(1000, "hossein", 1403);
  console.log(account.balance);

  account.deposit(200);
  console.log(`balnce after deposite: ${account.balance}`);

  account.withdraw(500);
  console.log(`balnce after withdraw: ${account.balance}`);

  account.deposit(-100);

  account.withdraw(2000);
}
testBankAccountClass();
