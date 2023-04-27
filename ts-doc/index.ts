// Types

// Using interface
/* interface ITriangle {
  height: number;
  base: number;

  area(): number;
  perimeter(): number;
} */

// Using type aliases
/* type TTriangle = {
  height: number;
  base: number;

  area(): number;
  perimeter(): number;
}; */

// extend interface
/* interface IAnotherTriangle extends ITriangle {} */

// extend type
/* type TAnotherTriangle = TTriangle & {}; */

// literal types
/* let userType: "admin"; */

// userType="executive"; // this is will raise an error
/* userType = "admin";

type sex = "male" | "M" | "m" | "female" | "F" | "f"; // literals into union
let userSex: sex = "M";

let someObj = { name: "John", age: 0 }; */
// this since as string and number and the literals

// to make them the literals, cast as a literal or cast as const
/* let constSomeObject = { name: "John", age: 0 } as const; */
// constSomeObject.age = 23; // error

// null and undefined are used to indicate the absence and uninitialized value

// type guard => narrowing
/* function sayHello(name: string | null) {
  // console.log(name.repeat(5)); // 'name' is possibly 'null'
  // console.log(name?.repeat(5));  // this is what we'd do now (null safety)

  if (typeof name === "string") {
    console.log(name.repeat(5)); // (parameter) name: string
  } else {
    // but name when used here is null: (parameter) name: null
    console.log("Name is not a string");
  }
} */

/* sayHello("null");
sayHello(null); */

// 0, 0n (bigint version of 0), "", undefined, null, NaN all all coerced to false

//
//

// More on functions

// Function Type Expressions
/* // we have a function, greeter, that takes a function, fn as a parameter
// fn: has a parameter, a which is a string and fn returns void
function greeter(fn: (a: string) => void) {
  fn("Hello, there!!");
}

// printToConsole is a function that takes a string an argument and prints the string
function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole); */

// to describe a function as argument, functionName: (...parameters) => returnType
// In the greeter function, we can create a type alias for the function as a param
/* type functionParam = (a: string) => void;

function newGreeter(func: functionParam) {
  func("Hello there");
} */

// Call Signatures
// with the function type expression, we can not add a property to the function,
// just the callable, so we'd use a call signature.
// We could do this is js
/* type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

const func: DescribableFunction = (number: number) => {
  return number % 2 === 0;
};

func.description = "Is even?";

doSomething(func); */

// Construct Signatures
// this is like pass new keyword

// Generic Functions
/* function firstElement(arr: any[]) {
  return arr[0];
}

// we don't want to return any
function firstElementT<SomeType>(arr: SomeType[]) {
  return arr[0];
}

// firstElement([1,2,3])
// even though we are dealing with numbers, the return type is any

// firstElementT([1, 2, 3]);
// the return type will be string

// with this we can even alter the content and ts will be okay
// firstElementT([1, "2", "3"]);
// the return type will be a union of the individual types

// firstElementT<number>([1, "2", "3"]);
// will raise an error since the type that is expected is array

// firstElementT([1, "2", "3"]);
// even though we are dealing with numbers, the return type is any */

/* function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed); */

// Guidelines for Writing Good Generic Functions
// - Push Type Parameters Down
// - Use Fewer Type Parameters
// - Type Parameters Should Appear Twice

