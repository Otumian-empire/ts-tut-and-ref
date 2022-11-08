// Types by Inference
let helloWorld = "Hello World";
// console.log(helloWorld)

// Defining Types
interface IUser {
    username: string
    password: string
}

class UserClass {
    username: string;
    password: string;
    email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    print() {
        console.log({
            username: this.username,
            password: this.password,
        })
    }
}

/* const user: IUser = {
    username: "Daniel Linn",
    password: "ReallySecurePassword",
} */

const user: IUser = new UserClass("Daniel Linn", "ReallySecurePassword", "danny@email.com");

// console.log(user)


// Composing Types

// union
type databases = "mysql" | "postgres" | "mongodb" | "sqlite"
type myBools = true | false
type userTypes = "common" | "plan" | "enterprise"

function sayHello(obj: string | string[]) {
    if (typeof obj === "string") {
        console.log(`${obj} is a string`)
    }
    // not necessary
    else if (Array.isArray(obj)) {
        console.log(`${obj.join(",")} is an array`)
    }
}

// sayHello("Hello")
// sayHello(["Hello", "hi"])


// generics
type NumericArray = Array<number> // Array<{name: number}>
type StringArray = Array<string>

interface IdType<T> {
    name: string;
    id: T;
}

class UserCredential<T>{
    name: string;
    id: T;

    constructor(name: string, id: T) {
        this.name = name;
        this.id = id
    }
}

const someUser1: IdType<number> = new UserCredential("daniel", 23)
console.log(someUser1)

const someUser2: IdType<boolean> = new UserCredential("daniel", true)
console.log(someUser2)

