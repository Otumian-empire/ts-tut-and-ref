// TypeScript Deep Dive by Basarat Ali Syed

// Interface
// interface Point2D {
//   x: number;
//   y: number;
// }

// interface Point3D extends Point2D {
//   z: number;
// }

// const point2D: Point2D = {
//   x: 2,
//   y: 4
// }

// const point3D: Point3D = {
//   x: 2,
//   y: 4,
//   z: 1
// }


// // Class
// class Point {
//   private x: number;
//   private y: number;

//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }

//   add(point: Point): Point {
//     return new Point(this.X + point.X, this.Y + point.Y)
//   }

//   get X() { return this.x }
//   get Y() { return this.y }
// }

// const origin: Point = new Point(0, 0)
// const pointX: Point = new Point(4, 0)
// const pointY: Point = new Point(0, 4)

// console.log(origin.add(pointX))
// console.log(origin.add(pointY))
// console.log(pointX.add(pointY))


// class PointThreeD extends Point {
//   private z: number;

//   constructor(x: number, y: number, z: number) {
//     super(x, y)
//     this.z = z
//   }

//   get Z() {
//     return this.z
//   }

//   add(point: PointThreeD) {
//     const point2D = super.add(point)
//     return new PointThreeD(point2D.X, point2D.Y, this.Z + point.Z)
//   }
// }

// const originD: PointThreeD = new PointThreeD(0, 0, 0)
// const pointXD: PointThreeD = new PointThreeD(4, 0, 0)
// const pointYD: PointThreeD = new PointThreeD(0, 4, 0)
// const pointZD: PointThreeD = new PointThreeD(0, 0, 4)

// console.log(originD.add(pointXD))
// console.log(originD.add(pointYD))
// console.log(originD.add(pointZD))
// console.log(pointXD.add(pointYD))
// console.log(pointXD.add(pointZD))
// console.log(pointYD.add(pointZD))

// Using rest parameter
// function restFunc(...params: number[]): number {
//   return params.reduce((total, param) => total + param)
// }

// console.log(restFunc(1, 2, 3))

// const numbers = [1, 2, 3, 4]
// const [a, b, ...c] = numbers;

// console.log({ a, b, c })


// ENUMS
// enum Family { Father, Mother, Son, Daughter }

// const familyHead = Family.Father;
// const familyHome = Family.Mother;

// console.log({ familyHead, familyHome, Family })
// console.log(Family[0])
// console.log(Family.Father)

// enums are like numeric
// enum Color {
//   Red, // 0
//   Green, // 1
//   Blue // 2
// }

// A continuation of the above enum
// if DarkRed was not assigned a value then
// color won't be extended but declared again
// enum Color {
//   DarkRed = 3, // 3
//   DarkGreen, // 4
//   DarkBlue // 5
// }

// console.log(Color)

// enum Tristate {
//   Unknown = -1,
//   False,
//   True
// }

// console.log(Tristate)

// Declaration Spaces
// There are two declaration spaces in TypeScript: 
// The variable declaration space and the type declaration space.

// Type Declaration Space
// The type declaration space contains stuff that can be used as a type
// annotation.
// class Foo { }
// interface Bar { }
// type Bas = {}

// we can then do
// let foo: Foo
// let bar: Bar
// let bas: Bas

// Variable Declaration Space
// The variable declaration space contains stuff that you can use as a
// variable.
// class Foo2 { }
// const someVar = Foo2;
// const someOtherVar = 123;

// with const someVar = Foo2;
// someVar was put into the variable space so it can not be used as a type
// later, even though it has the someVar was assigned the class Foo2

// Import 

// namespace importing {
//   export class Foo { }
// }

// import Bar = importing.Foo;
// var bar: Bar = Bar; // Okay

// namespace
// namespace util {
//   export function hello() {
//     console.log("Hello")
//   }
// }

// export default util

// interface Human {
//   fname: string;
//   lname: string;
// }

// const human: Human = {
//   fname: "John", lname: "Kennedy"
// }

// console.log(human)

// // used type annotation instead of interface
// const human2: {
//   firstName: string, lastName: string
// } = {
//   firstName: "Daniel",
//   lastName: "Oswald"
// }

// console.log(human2)

// // used a type alias to abstract the annotation
// type Human3 = {
//   firstName: string, lastName: string
// }

// const human3: Human3 = {
//   firstName: "Daniel",
//   lastName: "Oswald"
// }

// console.log(human3)

// // type alias and annotation will both behave like an interface
// // So in the case whereby the same annotation is repeated, use
// // type alias or interface

// Special types
// any, null, undefined, void

// use <any> to suppress an error
// let num: number = 23;
// let str: string = 'hey';

// num = <any>str;

// interface Human {
//   fullName: string;
//   getFullName: () => string;
// }

// const human: Human = {
//   fullName: "John Doe",
//   getFullName: () => human.fullName
// }

// console.log(human.getFullName())

// interface Foo {
//   bar: string;
//   bas: number;
// }

// const foo = {} as Foo;
// const foo = <Foo>{};
// console.log({ foo, type: typeof foo })
