// // Type aliases
// // Let's say we have a field/parameter with numerous types
// // we had to repeat that same set or more somewhere
// // we can use type aliases to take care of that

// // consider the user type below. We can use type alias to pull away
// // the type
// /* let User: {
//   userName: string;
//   password: string;
//   email: string;
//   address: object;
// };
//  */
// /* type UserType = {
//   userName: string;
//   password: string;
//   email: string;
//   address: object;
//   yearOfBirth: string | number;
// }; */

// // then we can use UserType as the user type
// // let User: UserType;

// // we can also use type alias for the address and define the fields of the
// // address and also for the yearOfBirth
// type NumberOrStringType = string | number;

// type addressType = {
//   country: string;
//   region: string;
//   city: string;
// };

// type UserType = {
//   userName: string;
//   password: string;
//   email: string;
//   address: addressType;
//   yearOfBirth: NumberOrStringType;
// };

// let User: UserType = {
//   userName: "danny123",
//   password: "password",
//   email: "danny@gmail.com",
//   address: {
//     city: "Accra",
//     country: "Ghana",
//     region: "Greater Accra",
//   },
//   yearOfBirth: 2000,
// };

// // Function

// const greet = () => {
//   return "Hello";
// };

// // greet = "hello there"; // this will be an error since implicitly, the type
// // of greet is inferred, we could pass the type as Function

// const anotherGreet: Function = () => {
//   return "Another Greeting";
// };

// // we passed a type to our parameter
// const add: Function = (a: number): number => {
//   return a + 5;
// };

// // to make a parameter optional we have to pass ? in front of
// // this will be set to undefined
// const add2: Function = (a?: number): number => (a ? a + 2 : 2);

// // we can also make the parameter have a default value
// // note that we can not make a parameter both optional and default
// function add3(a: number = 0): number {
//   return a + 1;
// }

// // a void function has no return value
// const voidFunction: Function = (vName: string, vAge: number): void => {
//   console.log(`${vName} is ${vAge} years old.`);
// };

// // function signatures
// let factorial: (a: number) => number;

// // function implementation
// factorial = (num: number) => {
//   return num <= 1 ? 1 : num * factorial(num - 1);
// };

// const num: number = 3;
// console.log({
//   num,
//   factorial: factorial(num),
// });
