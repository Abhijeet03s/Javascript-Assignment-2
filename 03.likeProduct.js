// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

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

function likeProducts(user_id, product_id) {
    for (let key of products) {
        if (product_id === key._id) {
            let isProductLiked = key.likes.includes(user_id);
            let indexOfLiked_Id = key.likes.indexOf(user_id);
            isProductLiked ? key.likes.splice(indexOfLiked_Id, 1) : key.likes.push(user_id);
            console.log(key);
        }
    }
}
likeProducts('aegfal', 'fg12cy');
console.log(products[1]);
likeProducts('aegfal', 'fg12cy');
console.log(products[1]);
likeProducts('aegfal', 'fg12cy');
console.log(products[1]);