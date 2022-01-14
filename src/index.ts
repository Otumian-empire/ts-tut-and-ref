// TypeScript Notes for Professionals
// Chapter 1: Getting started with TypeScript
// Chapter 2: Why and when to use TypeScript


// Chapter 3: TypeScript Core Types

// String literal types allow you to specify the exact value 
// a string can have.
// let human: "human";
// human = "adam" 
// Type '"adam"' is not assignable to type '"human"'.

// type Pet = "Dog" | "Cat" | "Bird"
// let myDogPet: Pet = "Dog"  // this will behave like a enum
// let myDuckPet: Pet = "Duck" 
// Type '"Duck"' is not assignable to type 'Pet'

// Tuple
// The data provided must be in the format provided
// type EmployeeTuple = [string, string, number]
// const employee: EmployeeTuple = ["John Doe", "Software Engineer", 32]

// arrays
// const evenNumbers: number[] = [2, 4, 6]
// const petNames: Array<string> = ['Shu', 'Rug', 'Perk']

// Enums
// enum Pet { Duck, Dog, Cat, Bird }
// enum Program { CS, STAT, MATH, ECON, AGRIC, BIO, PHY, PSY, PHILO }
// enum FileExtension { txt, py, ts, js, php, html, css, java, kt }
// enum Grade { A = 1, B, C, D, E, F }
// enum MimeType {
//     JPEG = 'image/jpeg',
//     PNG = 'image/png',
//     PDF = 'application/pdf'
// }

// // extend enum
// enum TechJob { FrontEnd, BackEnd, DevOps, NetworkEngineer, DatabaseEngineer }
// enum TechJob { CustomerService = 5, Accounting, Marketing }


// Chapter 6: Functions

// optional parameter with ? before :type, by default all parameters are
// required

// function add(firstNumber: number, secondNumber?: number) { }

// named functions
// function namedFunc() { }

// anonymous function
// const anonymousFunc = function () { }

// lambda function
// const lambdaFunc = () => { }


// Chapter 7: Classes

// class Math1 {
//   private _arguments: number[]

//   constructor(...args: number[]) {
//     this._arguments = [...args]
//   }

//   get arguments() {
//     return [...this._arguments]
//   }

//   add(): number {
//     return this.arguments.reduce((total, arg) => { return total + arg }, 0)
//   }

//   multiply(): number {
//     return this.arguments.reduce((total, arg) => { return total * arg }, 1)
//   }
// }

// const add: Math1 = new Math1(1, 2, 3, 4)
// console.log({
//     add: add.add(),
//     multiply: add.multiply()
// })

// class Math2 extends Math1 {

//   constructor(...args: number[]) { super(...args) }

//   subtract(): number {
//     return Math.abs(
//       this.arguments.reduce((total, arg) => {
//         return total - arg
//       }, 0)
//     )
//   }
// }

// const add: Math2 = new Math2(1, 2, 3, 4)
// console.log({ subtract: add.subtract() })

// Abstract class
// abstract class Human {
//   constructor(private name: string, private age: number) { }

//   get Name() {
//     return this.name
//   }

//   get Age() {
//     return this.age
//   }

//   abstract shout(): string
// }

// class RiceHead extends Human {

//   constructor(name: string, age: number) {
//     super(name, age)
//   }

//   shout(): string {
//     return `Name: ${this.Name}, Age: ${this.Age}`
//   }
// }

// const riceHead: RiceHead = new RiceHead("Daniel Opare", 34)
// console.log(riceHead.shout())

// accessors - use protected so that we won't create getters

// abstract class Human {
//   constructor(protected name: string, protected age: number) { }
//   abstract shout(): string
// }

// class RiceHead extends Human {

//   constructor(name: string, age: number) {
//     super(name, age)
//   }

//   shout(): string {
//     return `Name: ${this.name}, Age: ${this.age}`
//   }
// }

// const riceHead: RiceHead = new RiceHead("Daniel Opare", 34)
// console.log(riceHead.shout())


// Chapter 8: Class Decorator
