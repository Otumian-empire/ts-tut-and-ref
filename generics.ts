// Generics

type StringOrNumber = string | number;
type ArrayStringOrNumber = StringOrNumber[];
type Dictionary = { [key: string]: any };

function identity(
  // input
  // input: any
  // input: string | number | number[] | string[]
  // input: string | number | number[] | string[] | { name: string }

  /* input:
  | string
  | number
  | number[]
  | string[]
  | { name: string }
  | { age: number } */

  input: StringOrNumber | ArrayStringOrNumber | Dictionary
) {
  return input;
}

/* console.log("identity 1", identity("Hello"));
console.log("identity 2", identity(2));
console.log("identity 4", identity([1, 2]));
console.log("identity 4", identity("Hello".split("")));
console.log("identity 5", identity({ name: "Michael Jackson" }));
console.log("identity 6", identity({ age: 30 }));
console.log(
  "identity 7",
  identity({
    address: {
      city: "accra",
      street: "Agbawe link",
    },
  })
);
console.log("identity 8", identity([1, ""]));
 */

function genericIdentity<T>(input: T) {
  return input;
}

// console.log("identity 1", genericIdentity("Hello"));
// console.log("identity 1", genericIdentity<string>("Hello"));
// console.log("identity 2", genericIdentity<number>(2));
// console.log("identity 2", genericIdentity(2));
// console.log("identity 4", genericIdentity([1, 2]));
// console.log("identity 4", genericIdentity("Hello".split("")));
// console.log("identity 5", genericIdentity({ name: "Michael Jackson" }));
// console.log("identity 6", genericIdentity({ age: 30 }));
// console.log(
//   "identity 7",
//   genericIdentity({
//     address: {
//       city: "accra",
//       street: "Agbawe link",
//     },
//   })
// );
// console.log("identity 8", genericIdentity([1, ""]));

// Generic interfaces

interface Box<T> {
  inside: T;
}

let stringBox: Box<string> = {
  inside: "a string box",
};

let numberBox: Box<number> = {
  inside: "a string box".length,
};

// Generic classes
class Secret<Key, Value> {
  key: Key;
  value: Value;

  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
  }

  getValue(key: Key): Value | undefined {
    if (key === this.key) {
      return this.value;
    }

    return undefined;
  }
}

// this is referring to the hour, minute and second hand
interface Hand {
  value: number;
  isValid(someBound: number): void;
}

class TimeHand implements Hand {
  value: number;

  constructor(v: number) {
    this.value = v;
  }

  isValid(someBound: number): void {
    if (this.value > someBound) {
      throw new Error(`${this.value} can not be greater than ${someBound}`);
    }
  }
}

// to create a time, we need the hour, minute and second hand
interface Time<T> {
  hour: T;
  minute: T;
  second: T;
}

// convert the time to 24 hours
interface TwentyFourHour {
  toTwentyFourHour(): number;
}

interface Clock extends Time<Hand>, TwentyFourHour {}

class HumanClock implements Clock {
  hour: Hand;
  minute: Hand;
  second: Hand;

  constructor(h: Hand, m: Hand, s: Hand) {
    this.hour = h;
    this.minute = m;
    this.second = s;
  }

  toTwentyFourHour(): number {
    return this.hour.value + 12;
  }

  displayTime(before12pm: boolean = false): string {
    try {
      this.hour.isValid(11);
      this.minute.isValid(59);
      this.second.isValid(59);

      return ` ${before12pm ? this.hour.value : this.toTwentyFourHour()} : ${
        this.minute.value
      } : ${this.second.value} `;
    } catch (error) {
      return (error as Error).message;
    }
  }
}

const time = new HumanClock(
  new TimeHand(1),
  new TimeHand(30),
  new TimeHand(56)
);

console.log(time.displayTime(true));

// enums

enum Title {
  STUDENT = "student",
  // NOOB = "entry level",
  JUNIOR = "junior",
  // DEVELOPER = "developer",
  INTERMEDIATE = "intermediate",
  // ENGINEER_1 = "engineer 1",
  // ENGINEER_2 = "engineer 2",
  PRODUCT_LEAD = "product lead",
  TEAM_LEAD = "team lead",
  SENIOR = "senior",
  // SCRUM_MASTER = "scrum master",
  PROJECT_LEAD = "project lead",
  ENGINEERING_MANAGER = "engineering manager",
}

console.log(Title.ENGINEERING_MANAGER);
