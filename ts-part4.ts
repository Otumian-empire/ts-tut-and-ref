// import { ExportedClass } from "./exportedModule/exportedClass";
// OOP
/*
class -> Object
property -> Variable
method -> Function

class -> Human
properties -> name, age, job, hobby
methods -> getDOB, description, etc */

// class Account {
//   fullName: string;
//   email: string;
//   password: string;

//   constructor(_fullName = "", _email = "", _password = "") {
//     this.fullName = _fullName;
//     this.email = _email;
//     this.password = _password;
//   }

//   printDescription() {
//     console.log(`Full name: ${this.fullName}`);
//     console.log(`Email: ${this.email}`);
//     console.log(`Password: ${this.password}`);
//   }
// }

// const adminAcc: Account = new Account(
//   "John Doe",
//   "johndoe@gmail.com",
//   "secure-password-123"
// );

// adminAcc.printDescription();

/* 
  Getters and Setter are methods that act like properties
  Use get and set to create a getter and setter methods */
// type StrOrNum = string | number;

// class Student {
//   fullName: string;
//   id: StrOrNum;
//   program: string;
//   year: StrOrNum;

//   constructor(
//     _fullName: string,
//     _id: StrOrNum,
//     _program: string,
//     _year: StrOrNum
//   ) {
//     this.fullName = _fullName;
//     this.id = _id;
//     this.program = _program;
//     this.year = _year;
//   }

//   get sId() {
//     return this.id;
//   }

//   set sId(_id) {
//     this.id = _id;
//   }

//   get sFullName() {
//     return this.fullName;
//   }

//   set sFullName(_fullName: string) {
//     this.fullName = _fullName;
//   }

//   get sProgram() {
//     return this.program;
//   }

//   set sProgram(_program) {
//     this.program = _program;
//   }

//   get sYear() {
//     return this.year;
//   }

//   set sYear(_year: StrOrNum) {
//     this.year = _year;
//   }
// }

/* 
  Static methods is a method of the class and not of the instance created
  So a static method does not require an instance of the class to use
  These are usually called helper/utility methods */
// class Book {
//   title: string;
//   author: string;

//   constructor(_title: string, _author: string) {
//     this.title = _title;
//     this.author = _author;
//   }

//   static same(bookA: Book, bookB: Book) {
//     return bookA.title === bookB.title && bookA.author === bookB.author;
//   }
// }

// const book1 = new Book("Python3 Programming", "Daniel Mccarthy");
// const book2 = new Book("Python3 Programming", "Annette Mulley");

// console.log(
//   `The two books are ${Book.same(book1, book2) ? "" : "not "}the same`
// );

/* 
  Inheritance and extending */
// class Rectangle {
//   width: number;
//   height: number;

//   constructor(_width: number, _height: number) {
//     this.width = _width;
//     this.height = _height;
//   }

//   get area() {
//     return this.width * this.height;
//   }

//   get perimeter() {
//     return 2 * (this.width + this.height);
//   }

//   static valid(rect: Rectangle) {
//     return rect.width !== rect.height;
//   }
// }

// class Square extends Rectangle {
//   constructor(_side: number) {
//     super(_side, _side);
//   }
// }

// const rect = new Rectangle(5, 4);
// console.log(rect.area);
// console.log(rect.perimeter);

// const sq = new Square(5);
// console.log(sq.area);
// console.log(sq.perimeter);

/* 
  Polymorphism: the act of redefining a method of a parent class
  by a child class */

// class Animal {
//   name: string;
//   constructor(_name: string) {
//     this.name = _name;
//   }

//   // method to override
//   sayHi() {
//     console.log("I am an Animal");
//   }
// }

// class Dog extends Animal {
//   constructor(_name: string) {
//     super(_name);
//   }

//   // override sayHi
//   override sayHi() {
//     console.log("I am a Dog");
//   }
// }

// const a = new Animal("Big Animal");
// a.sayHi();

// const d = new Dog("Big Dog");
// d.sayHi();

/*
 Access modifiers: public, private and readonly
 The default behavior is public
 Attributes made public can be accessed outside the class
 Attributes made private can not be accessed outside the class */
// class Circle {
//   /* private radius: number;

//   constructor(radius: number) {
//     this.radius = radius;
//   } */

//   // this is the same as the above
//   constructor(private radius: number) {}

//   get radiusValue() {
//     return this.radius;
//   }

//   area() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }

//   circumference() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// const circle: Circle = new Circle(10);
// console.log(
//   `The area of a circle of radius, ${circle.radiusValue} is ${circle.area()}`
// );
// console.log(
//   `The circumference of a circle of radius, ${
//     circle.radiusValue
//   } is ${circle.circumference()}`
// );

// module
// change the target and module to es6 and es2015 respectively in the tsconfig
// use the exports keyword to export it

// const ec = new ExportedClass("Daniel PC", "danny@gmail.com");
// console.log(ec.details());
