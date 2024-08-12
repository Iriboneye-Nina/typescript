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
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<string>("hello, typeScript");
// let products = identity<number>(5+5)
// console.log(products)

//Class Decorator
// function logCreation(constructor: Function) {
//     console.log("A new instance has been created!");
//   }
  class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  const cat = new Animal("Cat");
  console.log(cat)

  //Method Decorator
   
    class Calculator {

        add(a: number, b: number): number {
          return a + b;
        }
      }
   