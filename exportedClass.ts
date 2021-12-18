export class ExportedClass {
  constructor(private fullName: string, private email: string) {}

  details(): string {
    return `${this.fullName} owns ${this.email}`;
  }
}
