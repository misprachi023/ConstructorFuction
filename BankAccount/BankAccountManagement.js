function BankAccount(accountNumber, name, type, balance) 
 {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    

    this.deposit = function (amount) 
    {
      this.balance += amount;
      console.log(`Now ${this.name} has this amount ${this.balance}`)
    };
    

    this.withdraw = function (amount)
    {
        if(this.balance >= amount)
       {
           this.balance -= amount;
           console.log(`Now ${this.name} has this amount ${this.balance}`)
    
           
        }
        else{
            // this.balance -=amount;
          console.log(`${this.name} Insufficient balance ${this.balance}-${amount}`)
        };
        
    };
    
    (this.balance>=0)?this.status=true:this.status=false;

    this.checkBalance = function () 
    {
      return this.balance; 
    };

    this.isActive = function ()
    {
        if(this.balance >= 0){
            console.log("active")
        }
        else{
              console.log("inactive")
        }
    };
    
    
}
  let account1 = new BankAccount(6762889326, "Ajay" , "Saving" , 4000);
  let account2 = new BankAccount(6728920154, "Deepak" , "Current" ,166908);
  let account3 = new BankAccount(586866507, "Prakash" , "Current" , 1563868);
  let account4 = new BankAccount(367687076, "Aman" , "Saving" , 5583);
  let account5 = new BankAccount(987645431, "Ravendra" , "Saving" , 172);
  let account6 = new BankAccount(867565443, "Siddharth" , "Current" , 16769);
  let account7 = new BankAccount(767675543, "Vishal" , "Saving", -30);
  let account8 = new BankAccount(2567697867, "Manish" , "Current" , 16791);
  let account9 = new BankAccount(5756432786, "Murtaza" , "Current" , 167618);
  let account10 = new BankAccount(5756753266, "Prachi" , "Saving" , -10682);


  function getTotalBalance(account1, account2, account3,account4,account5,account6,account7,account8,account9,account10)
{
    let total=0;
    if(account1.status)
    {
        total+=account1.balance
    }
    if(account2.status)
    {
        total+=account2.balance
    }
    if(account3.status)
    {
        total+=account3.balance 
    }
    if(account4.status)
    {
        total+=account4.balance
    }
    if(account5.status)
    {
        total+=account5.balance
    }
    if(account6.status)
    {
        total+=account6.balance
    }
    if(account7.status)
    {
        total+=account7.balance
    }
    if(account8.status)
    {
        total+=account8.balance
    }
    if(account9.status)
    {
        total+=account9.balance
    }
    if(account10.status)
    {
        total+=account10.balance
    }
    console.log(total)
}
getTotalBalance(account1, account2, account3,account4,account5,account6,account7,account8,account9,account10)
  account4.deposit(700);
  account5.withdraw(6000);
  account8.withdraw(3000);
  account4.deposit(5000);
  account10.withdraw(4500);
  


  account6.isActive();
  account10.isActive();
  account1.isActive();
  account10.isActive();

  account1.checkBalance();
  account10.checkBalance();
// console.log(account4.status, account4.balance)

getTotalBalance(account1, account2, account3,account4,account5,account6,account7,account8,account9,account10)

  
