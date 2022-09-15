// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


let personAccount = {

    firstName: "Abhijeet",

    lastName: "Sharma",

    incomes: [
        { 70000: 'Job Salary' },
        { 40000: 'Part Time Job' },
        { 30000: 'Freelancer' },
        { 10000: 'Stock' },
    ],

    expenses: [
        { 7000: 'Room Rent' },
        { 6000: 'Petrol' },
        { 8000: 'Shopping' },
        { 1000: 'Electricity' },
    ],

    totalIncome: function () {
        let tIncome = 0;
        this.incomes.forEach((e) => {
            for (const k in e) {
                tIncome = tIncome + Number(k);
            }
        });
        console.log('\nTotal Income : ', tIncome);
        return tIncome;
    },

    totalExpense: function () {
        let tExpense = 0;
        this.expenses.forEach((e) => {
            for (const k in e) {
                tExpense = tExpense + Number(k);
            }
        });
        console.log('\nTotal Expenses : ', tExpense);
        return tExpense;
    },

    accountInfo: function () {
        console.log(`\nAccount Name : ${this.firstName} ${this.lastName}`);

        console.log('\nYour List of Incomes are : ');
        this.incomes.forEach(e => {
            console.log(e);
        });

        console.log('\nYour List of Expenses are : ');
        this.expenses.forEach(e => {
            console.log(e);
        });
    },

    addIncome: function (obj) {
        this.incomes.push(obj);
    },

    addExpense: function (obj) {
        this.expenses.push(obj);
    },

    accountBalance: function () {
        console.log(`\nYour account balance is : ${this.totalIncome() - this.totalExpense()}`);
    }

}


personAccount.accountInfo();
// personAccount.accountBalance();
// personAccount.totalIncome();
// personAccount.totalExpense();
// personAccount.addIncome({ 3000: 'Gaming' });
// personAccount.addExpense({ 1500: "Food Expenses" });
// personAccount.accountInfo();
// personAccount.accountBalance();
// personAccount.totalIncome();
// personAccount.totalExpense();