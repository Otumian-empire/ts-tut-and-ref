// // explicit types
// const fullName: string = "John Doe";
// const age: number = 35;
// const isAdmin: boolean = false;

// // arrays
// // declare a variable that should be an array of type
// let numericArray: number[];
// let strArray: string[];

// // numericArray.push(23); // error: it is an array but a variable
// // either we do, let numericArray: number[] = []; or
// // numericArray = new Array() or numericArray = []

// // union types
// // for a mixed-type-array, we use union
// /* 
//   We did, let numericArray: number[];
//   if we want numericArray by some magic to have a string value then we'd have to use union when declaring the type of numericArray

//   We'd have to do, 
//     let numericArray: number[] = [];
//     let numericArray: (number|string)[] = [];
// */
// const mixedArray: (number | string)[] = [];
// mixedArray.push(23);
// mixedArray.push("23");

// // error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// // mixedArray.push(23 === '23')
// // but if we're to update mixedArray as
// // const mixedArray: (number | string | boolean)[] = [];
// // then there won't be any error

// // for a normal value-variable to hold several types, we use union
// let userId: string | number;
// userId = "1234";
// userId = 1234;

// // objects: object, array
// let profile: object = {
//   fullName: "John Doe",
//   age: 34,
//   weight: 123.6,
//   isEngineer: true,
// };

// // Property 'age' does not exist on type 'object'
// // profile.age = 12;

// // this will work, it will not be an object as in {} but will be of
// // type of object
// // profile = []
// // to prevent profile from been set to an array, we have to declare the
// // type of profile to be an object, {..x'tics}

// let human: { fullName: string; age: number };

// human = { fullName: "Jeffery Dan", age: 34 };
// human.age = 12;

// // human = []  // error

// // dynamic types - any
// /* 
// We know that let x = 3 becomes of type number by default and we can reassign
// x, x = 23 and everything will be okay. If this was js and not ts, we could have 
// done, x = true. We could do something like that in can be done in ts
// let x : any; we can make x whatever we want and nothing will go wrong. Though 
// this is awesome, it voids the essence of using ts in the first place

// We restricted the mixed array. We made it only for string and numbers and later
// boolean. We could avoid the headache and use any
// let mixedArray; any[]=[]
// */
