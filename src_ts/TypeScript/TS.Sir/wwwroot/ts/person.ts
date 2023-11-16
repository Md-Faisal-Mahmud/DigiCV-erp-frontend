export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Exporting a variable
export const PI = 3.14159;

// Exporting a function
export function add(x: number, y: number): number {
    return x + y;
}