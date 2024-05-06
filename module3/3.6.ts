{
    // access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;
    
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
    // setter
    set Deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    //    public addDeposit(amount: number) {
    //         this._balance = this._balance + amount
    //         // console.log(newBalance);
    //     }
    
    // getter
    get Balance() {
        return this._balance;
    }
    //    public getbalance() {
    //         return this._balance;
    //     }
    }
    
    const poorAccount = new BankAccount(111, 'Gorib', 495);
    // poorAccount.addDeposit(2356);
    // const myBalance = poorAccount.getbalance();

    const deposit = poorAccount.Deposit=5;
    const myBalance = poorAccount.Balance;
    console.log(`Your balance is ${myBalance} tk`)
    // 
    }