// Types

// Using interface
interface ITriangle {
  height: number;
  base: number;

  area(): number;
  perimeter(): number;
}

// Using type aliases
type TTriangle = {
  height: number;
  base: number;

  area(): number;
  perimeter(): number;
};

// extend interface
interface IAnotherTriangle extends ITriangle {}

// extend type
type TAnotherTriangle = TTriangle & {};

// literal types
let userType: "admin";

// userType="executive"; // this is will raise an error
userType = "admin";

type sex = "male" | "M" | "m" | "female" | "F" | "f"; // literals into union
let userSex: sex = "M";

let someObj = { name: "John", age: 0 };
// this since as string and number and the literals

// to make them the literals, cast as a literal or cast as const
let constSomeObject = { name: "John", age: 0 } as const;
// constSomeObject.age = 23; // error

// null and undefined are used to indicate the absence and uninitialized value
