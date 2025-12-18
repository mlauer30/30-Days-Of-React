/*
1. Create an object literal called _personAccount_. It has _firstName, lastName, 
incomes, expenses_ properties 
*/

let personAccount = {
    firstName: "Matthew",
    lastName: "Lauer",
    incomes: [
        { income: 1.00, description: "odd job cleaning car windows at a busy commuter intersection" },
        { income: 2.00, description: "tip from delivering a pizza as a bike courier"}
    ],
    expenses: [
        { expense: 100.00, description: "expense for bulk order of cycling gels, smh..." },
        { expense: 60.00, description: "expense for bike fit, smh..." },
    ],

    //sum of all incomes
    totalIncome: function(){ 
        let total = 0;
        for(let income of this.incomes){
            total += income.income; 
        }
        return total;
    },

    //sum of all expenses
    totalExpense: function(){ 
        let total = 0;
        for(let expense of this.expenses) {
            total += expense.expense;
        }
        return total;
    },

    //gets first and last name, total income and expenses, and overall account balance
    accountInfo: function(){ 
        return `
            First name: ${this.firstName}
            Last name: ${this.lastName}
            Transactions: ${this.transactions()}
            Total income: ${this.totalIncome()}
            Total expenses: ${this.totalExpense()}
            Account balance: ${this.accountBalance()}
        `;
    },

    /*
     * and it has _totalIncome, totalExpense, accountInfo, addIncome, addExpense_ and 
     * _accountBalance_ methods. Incomes is a set of incomes and its description and expenses 
     * is a set of incomes and its description.
     */

    //creates new income and description to expenses array
    addIncome: function(income) { 
        this.incomes = [
            ...this.incomes, 
            income,
        ];        
    },

    //creates new expense entry and description to expenses array
    addExpense: function(expense) { 
        this.expenses = [
            ...this.expenses, 
            expense,
        ];
    },
    transactions: function(){
        const incomes = this.incomes.map((income) =>`
            income: ${income.income} 
            description: ${income.description}
        `);
        const expenses = this.expenses.map((expense) => `
            expense: ${expense.expense}
            description: ${expense.description}
        `);

        const output = incomes.concat(expenses); 
        return output.join(''); 
    },

    accountBalance: function(){
       return this.totalIncome() - this.totalExpense(); 
    },

};

personAccount.addIncome({ 
    income: 200, 
    description: "luck day in atlantic city" 
});
personAccount.addExpense({ 
    expense: 1, 
    description: "slice of pizza 🍕" 
});
personAccount.addExpense({ 
    expense: 500, 
    description: "crashing bike into a car and found at fault" 
});
console.log(personAccount.accountInfo());

/*
2. Questions: 2, 3 and 4 are based on the following two arrays:users and products 
*/

//js
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

/*
2.  Imagine you are getting the above users collection from a MongoDB database.
    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the 
        user that he has already an account. 
*/

/**
 * 
 * For future reference, use the some() or find() functions for more readably checking whether
 * an object contains a certain value. 
 *
 * signUp is only written this way to remain in scope for this course's section. The find() and some()
 * methods appear later in the functional programming unit.
 *
 */
    function signUp(users, user){
        for(let value of Object.values(users)){
            if(value._id == user._id) {
                console.log("The user you are trying to create already exists.");
                return;
            }
        }
        users.push(user);
    };
    
    signUp(users, {
        _id: '90opLw', 
        username: 'Matt',
        email: 'matthew@yahoo.com',
        password: '123534',
        createdAt: '07/15/2025 10:00 AM',
        isLoggedIn: false,
    });
    
    signUp(users, {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    });
    
console.log(users);

/*
    b. Create a function called signIn which allows user to sign in to the application
*/

function signIn(username, password) {
    for (let value of Object.values(users)) {
        if (value.username == username && value.password == password) {
            value.isLoggedIn = true;
            console.log('%s is logged in: %s', username, value.isLoggedIn);
        }
    }
}

signIn('Matt','123534');

/*
3. The products array has three elements and each of them has six properties.
   a. Create a function called rateProduct which rates the product
*/



/*
   b. Create a function called averageRating which calculate the average rating of a product
*/



/*
4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
*/
