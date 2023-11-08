# JavaScript and classes
Does javascript have classes? 
Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015 specification (often refered to as ES6). However it's important to note that JavaScript is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms, In other words, it provides a more familiar syntax for developers comming from class-based languages such as Java or C++, but under the hood, it works somewhat differently.

Here's a simple example of a class in JavaScrippt:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
    }
}

let person1 = new Person("Jhon", 30);
person1.sayHello();

In this example , "Person" is a class that has a constructor and a method named `sayHello`. The constructor method is a special method for creating and initializing an object created with a class. It will run when we instanciate new objects using the `new` keyword.

So, while JavaScript does have classes, remember that they work somewhat differently from classes in languages with class-based inheritance, due to javascript's prototype-based nature.

# OOP (object oriented programming)

## Waht is an object ?
Objects are a collection of properties and methods.

## Why use OOP?
The OOP uses objects in programming, the reason to use OOPs in a code is to increase the reusability and readability of a code. 

## parts of OOP
Object litral

- constructor function
- Prototypes
- classes
- Instances (new, this)

## 6 pillars of OPPS
- Objects
- Classes
- Abstraction
- Encapsulation 
- Inheritance
- Polymorpism