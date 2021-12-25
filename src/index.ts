// Generics
// Arrays are generic

const numArr = [1, 2, 3]; // number[]
const strArr = ["1", "2", "3"]; // string[]

// const numArr is the same as below
const numArr2: Array<number> = [4, 5, 6];
const strArr2: Array<string> = ["4", "5", "6"];

// we can use type aliases to make thing short
type NumberArray = Array<number>;
type StringArray = Array<string>;

// now we can easily write
const numArr3: NumberArray = [4, 5, 6];
const strArr3: StringArray = ["4", "5", "6"];

// Function the works with generic array

// array of numbers
// const last: Function = (arr: number[]) => arr[arr.length - 1];
const last: Function = (arr: Array<number>) => arr[arr.length - 1];

// the problem with the above function is that, it will only work numbers
// last with a generic argument

// const last2: Function = (arr: Array<any>) => arr[arr.length - 1];
// const last2: Function = <GenericType>(arr: Array<GenericType>) => {
//   return arr[arr.length - 1];
// };

const last2 = <T>(arr: Array<T>) => arr[arr.length - 1];

// console.log({
//   lastNumber: last2([1, 2, 3, 4]),
//   lastString: last2(["1", "2", "3", "4"]),
// });

// for a function to take a generic type
function makeArr(x: number) {
  return [x];
}

function makeArrGen<T>(x: T) {
  return [x];
}

// add multiple generic types
function makeArrGen2<X, Y>(x: X, y: Y) {
  return [x, y];
}

console.log({
  numArr: makeArrGen2(1, "s"),
  strArr: makeArrGen2("1", "true"),
});

// Take addition generic type of system
// create reusable blocks of codes with different types
// ENUMS - numerically associated constants
// Tuple
