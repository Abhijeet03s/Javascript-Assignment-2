const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            {
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [
            {
                userId: 'fg12cy',
                rate: 5
            }
        ],
        likes: ['fg12cy']
    }
]

// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product

let rateProduct = (id, rating, user) => {

    let count = 0;

    products.forEach(e => {
        if (id == e['_id']) {
            e['ratings'].push({ userId: user, rate: rating });
            count++;
        }
    });

    if (count == 0) {
        console.log("Invalid product ID");
    }
    else {
        console.log("Rating added");
    }

};

// rateProduct('eedfcf', 100, 'manik');
// let sampObj = products.filter(e => e['_id']=='eedfcf')
// console.log(sampObj[0]);


// b. Create a function called averageRating which calculate the average rating of a product



let averageRating = (id) => {

    products.forEach(e => {
        if(id == e['_id']){
            let tRate = 0;
            e['ratings'].forEach(el => {
                tRate = tRate + el['rate'];
            });
            console.log(`Average rating is : ${tRate/e['ratings'].length}`);
        }
    });

};
averageRating('eedfcf');




