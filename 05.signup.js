const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(data) {
    for (let data of users) {
        if (data.isLoggedIn) {
            console.log("You have an account");
        }
        else {
            console.log("Please register")
        }
    }
}
signUp(users)


// b. Create a function called signIn which allows user to sign in to the application.

function signIn(data) {
    for (let data of users) {
        if (data.isLoggedIn) {
            console.log("You are already signed In");
        }
        else {
            console.log("Please signUp")
        }
    }
}
signIn(users)










