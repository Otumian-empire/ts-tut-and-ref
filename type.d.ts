interface Human {
  firstName: string;
  lastName: string;
  fullName: () => string;
  dateOfBirth: Date;
  age: () => number;
  job: string;
  salary: number;
  workPlace: string;
  JobDescription: () => string;
}
