const obj1 = new Object(); // new object
const obj2 = {} // empty object

obj1.name = 'Mouse';
obj1.price = 10.99;

const mouse = {
    name: 'HP Smart',
    price: 10.99,
    quantity: 15,
    delivery: [ 'pick up', 'delivery' ]
}

console.log(mouse);

// add properties with dot notation or bracket notation

mouse.colors = [ 'White', 'Black', 'Blue', 'Pink' ];
// mouse['colors'] = [ 'White', 'Black', 'Blue', 'Pink' ];


// remove properties with dot notation or bracket notation
delete mouse.delivery;
// delete mouse['delivery'];

console.log(mouse);


// update property values with dot notation or bracket notation
mouse.price = 15.99;

// retrieve property values with dot notation or bracket notation
console.log(mouse.price);
// console.log(mouse['price']);