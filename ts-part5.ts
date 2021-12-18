// // interfaces
// // use interface to restrict certain type of object
// // use the interface kw to create an interface

// type StrOrNum = string | number;

// interface IHuman {
//   fullName: string;
//   age: number;
//   description(): void;
// }

// const human: IHuman = {
//   fullName: "John Doe",
//   age: 20,
//   description: () => console.log("Hello there, I am a goat"),
// };

// // interfaces with classes

// interface IStudent {
//   fullName: string;
//   program: string;
//   year: StrOrNum;
//   id: StrOrNum;
// }

// class Student implements IStudent {
//   constructor(
//     public fullName: string,
//     public program: string,
//     public year: StrOrNum,
//     public id: StrOrNum
//   ) {}

//   details() {
//     return `Student Details\nFullName: ${this.fullName}\nYear: ${this.year}\nID: ${this.id}\nProgram: ${this.program}`;
//   }
// }

// const s = new Student("John Doe", "Computer Science", 2019, 10825744);
// console.log(s.details());
