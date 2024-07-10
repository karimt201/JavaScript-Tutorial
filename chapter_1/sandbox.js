// regular functions

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

//  Arrow Function

const calcArea = radius => 3.14 * radius**2 ;

const area = calcArea(5);
console.log(`this area is : ${area}`);

// practise Arrow Function

// regular functions

// const greet = function(){
//     return 'hallo, world'
// };

//  Arrow Function

const greet = () => 'hallo, world';

const test = greet();
console.log(test);

// const bill = function (products , tax) {
//     let total = 0 ;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

const bill = (products,tax) => {
    let total = 0 ;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

const result = bill([1,5,3],0.5);
console.log(result);
