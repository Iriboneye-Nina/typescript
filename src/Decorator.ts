//Class Decorator

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
      const calculator = new Calculator();
      calculator.add(2, 3);

      //Property Decorator

      class Person {
       
        id: number;
      
        constructor(id: number) {
          this.id = id;
        }
      }
      
      
      
      const person = new Person(123);
      person.id = 456; 
      console.log(person.id); 

      //Parameter Decorator
      class Logger {
        logMessage(message: string) {
          console.log(message);
        }
      }
      const logger = new Logger();
      logger.logMessage("Hello, world!");