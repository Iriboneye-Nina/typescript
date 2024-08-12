//Generics:
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello, typeScript");
let products = identity<number>(5+5)
console.log(products)