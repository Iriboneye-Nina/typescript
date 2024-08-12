//Type Annotations:

// let name: string = "john";
// console.log('string')
// let age: number = 30;
// console.log('number')

//Interfaces:
//  interface personal {
//     name: string,
//      age: number,
//  }
 
//Generics:

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello, typeScript");
let products = identity<number>(5+5)
console.log(products)
