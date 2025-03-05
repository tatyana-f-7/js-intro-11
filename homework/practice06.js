// Output all numbers from 1 to 10

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Output all odd numbers from 1 to 10

for(let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// Output all even numbers from 1 to 10

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 1) console.log(i);
}



// Output all the odd numbers from 1 to random number between 10 and 20 (both inclusive)

let random = Math.round(Math.random()  * (20 - 10)) + 10;
console.log(random);

for(let i = 1; i <= random; i+=2) {
console.log(i);
}

let container = 1;
random






let name = 'Mick';

for(let i = name.length - 1; i >= 0; i--) {
    console.log(name[i])
}










let name2 = 'Bilal';
let reversedName2 = '';

for(let i = name2.length - 1; i >= 0; i--) {
    reversedName2 += name2[i]
}

console.log(reversedName2);
