
/*
for (let i = 0; i <= 9 ; i++){
    console.log(i)
}
*/

/*
for (let i = 1; i <= 10; i++){
    console.log(i)
}
*/

// Mivel a nulla nem páros
for (let i = 1; i <= 10; i++){
    console.log(i*2)
}

let printNumbersTill = (number) => {
    for (let i = 1; i <= number; i++){
        console.log(i)
    }
};

printNumbersTill(20);
printNumbersTill(15);

let getGreetingTo = (name) => {
    return `Hello ${name}!`;
}

console.log(getGreetingTo('Mark'));

/*
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
*/

let printValues = (array) => {
    array.forEach((number) => {
        console.log(number);
    });
};


printValues([0, 3, 6, 7, 9]);