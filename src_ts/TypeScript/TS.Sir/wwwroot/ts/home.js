let message = 'Bismillahir Rahmanir Rahim !';
console.log(message);
//let isDone: boolean = true;
//console.log(isDone);
//let nameOfRab: string = 'Allah';
//console.log(nameOfRab);
//let list: number[] = [343, 343, 43];
//for (let i = 0; i < list.length; i++) {
//    console.log(list[i]);
//}
//let x: [string, number];
//x = ["Muhammad", 1];
//console.log(x);
//enum Color {
//    White=5,
//    Black,
//    Green
//}
//let z: string = Color[7];
//console.log(z);
//let prettySure: object = {name : 'Muhammad'} ;
//console.log(prettySure);
//let list1: any[] = [2, true, "Allahu akbar"];
//for (let i = 0; i < list1.length; i++) {
//    console.log(list1[i]);
//}
//function warnUser(Qalb : string): void {
//    console.log(`${Qalb} of Faisal is to please Allah. May Allah help me`);
//}
//warnUser("Heart");
//declare function create(o: object | null): void;
//create({ id : 1, name : "Muhammad"}); // OK
//create(null); // OK
//let someValue: any = "this is a string";
//let strLength: string = (<string>someValue).toLowerCase();
//console.log(strLength);
//Classes
//class Greeter {
//    greeting: string;
//    constructor(message: string) {
//        this.greeting = message;
//    }
//    greet() {
//        return "___" + this.greeting;
//    }
//}
//let g = new Greeter("As salamu alaikum !___")
//console.log(g.greet());
//interface IPerson  {
//    name: string;
//    age: number;
//} 
//interface IEmployee extends IPerson {
//    salary: number;
//} 
//class Employee implements IEmployee{
//    salary = 25000;
//    name = "Muhammad";
//    age = 23;
//}
//class Employee implements IEmployee {
//    name: string;
//    age: number;
//    salary: number;
//    constructor(n: string, a: number, s: number) {
//        this.name = n;
//        this.age = a;
//        this.salary = s;
//    } 
//} 
//let emp = new Employee("Muhammad", 34, 343423);
//console.log(emp);
//namespace MyNamespace {
//    export class Person {
//        name: string;
//        age: number;
//        constructor(name: string, age: number) {
//            this.name = name;
//            this.age = age;
//        }
//    }
//} 
//const person = new MyNamespace.Person("John Doe", 30);
//console.log(person.name); // Output: John Doe
var MyNamespace;
(function (MyNamespace) {
    let SubNamespace;
    (function (SubNamespace) {
        class User {
            constructor(name, email) {
                this.name = name;
                this.email = email;
            }
        }
        SubNamespace.User = User;
    })(SubNamespace = MyNamespace.SubNamespace || (MyNamespace.SubNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
const user = new MyNamespace.SubNamespace.User("John Smith", "john.smith@example.com");
console.log(user);
//// app.ts
//// Importing specific entities from person.ts
//import { Person, PI, add } from './person';
//// Using the imported class
//const person = new Person("John Doe", 30);
//console.log(`Person: ${person.name}, Age: ${person.age}`);
//// Using the imported constant
//console.log(`Value of PI: ${PI}`);
//// Using the imported function
//const result = add(5, 3);
//console.log(`Result of addition: ${result}`);
//# sourceMappingURL=home.js.map