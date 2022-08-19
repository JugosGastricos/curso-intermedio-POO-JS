//Clase 3:
const juan = {
    name: "Juanito",
    age: "18",
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.getOwnPropertyDescriptors(juan));
Object.defineProperty(juan, "age", {
    value: 18,
    configurable: false,
    enumerable: true,
    writable: false
});
console.log(Object.getOwnPropertyDescriptors(juan));

console.log(Object.entries(juan)[3][1]);

//Clase 4:
Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    configurable: true,
    enumerable: false
});

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: false,
    configurable: true,
    enumerable: true
});

Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    writable: false,
    configurable: false,
    enumerable: false
});

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    configurable: false,
    enumerable: true
});

Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));